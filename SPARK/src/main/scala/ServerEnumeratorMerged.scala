import java.util.Date

import datastructure.helper.ServerHelper
import org.apache.hadoop.fs.{FileSystem, Path}
import org.apache.spark.SparkContext._
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}


/**
 * Generates a list of
 * product -> aggregated domain count
 *
 * the aggregated domain count here adds up to the total number of domains
 */
object ServerEnumeratorMerged {

  def main(args : Array[String]): Unit = {
    val conf = new SparkConf().setAppName("ServerEnumerator")
    val sc = new SparkContext(conf)
    type HeaderInfo = (Date, Map[String, String])
    type DomainToHeaderInfo = (String, HeaderInfo)

    val hdfsPath =  new Path(args(0)) // the object files directory
    val exportHdfsPath = args(1) + "/enum_merged_" + System.currentTimeMillis() // "/user/naward01"
    println(hdfsPath, exportHdfsPath)

    val fs = FileSystem.get(sc.hadoopConfiguration)
    val combinedhdfsPath = fs.listStatus(hdfsPath).map(_.getPath.toString).reduce(_ + "," + _)
    println(combinedhdfsPath)

    val groupFilteredRdd: RDD[(String, Iterable[HeaderInfo])] = sc.objectFile[(String, Iterable[HeaderInfo])](combinedhdfsPath).coalesce(500)

    println("Number of domains: " + groupFilteredRdd.count())

    /**
     * For each platform version, the total number of domains
     * For each platform, the total number number of domains
     * Total unique #domains
     */

    val serverValuePerDomain: RDD[(List[String], String)] = groupFilteredRdd.map { x =>
      val headersMap: Map[String, String] = x._2
        .map(_._2) // only map, discarding date
        .fold(Map.empty[String, String])((a, b) => a ++ b) // merge maps
    val allPlatforms: List[String] = ServerHelper.getAllPlatformsRawServerHeaderSingle(headersMap)
      (allPlatforms, x._1)
    } // result is the list of platforms -> domain

    val serverPlatformsPerDomain: RDD[(String, String)] = serverValuePerDomain.flatMap { x =>
      val (platforms, domain) = x
      val result: List[(String, String)] = platforms.map((_, domain))
      result
    }

    val serverPlatformDomains: RDD[(String, Iterable[String])] = serverPlatformsPerDomain.groupByKey()
    val serverPlatformVersionCount: RDD[(String, Int)] = serverPlatformDomains.map(x => (x._1, x._2.size))

    serverPlatformVersionCount.sortByKey(ascending = true).map(x => ('"' + x._1.replace("\"", "\\\"") + '"' , x._2) ).saveAsTextFile(exportHdfsPath)

  }
}
