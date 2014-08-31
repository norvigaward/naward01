import java.util.Date

import org.apache.hadoop.fs.{FileSystem, Path}
import org.apache.spark.SparkContext._
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}


object DomainsCounter {

  def main(args : Array[String]): Unit = {
    val conf = new SparkConf().setAppName("DomainsCounter")
    val sc = new SparkContext(conf)
    type HeaderInfo = (Date, Map[String, String])
    type DomainToHeaderInfo = (String, HeaderInfo)

    val hdfsPath =  new Path(args(0)) // the object files directory
    val hdfsOutputPath = args(1) + "/domain_count_" + System.currentTimeMillis() // "/user/naward01"
    println(hdfsPath, hdfsOutputPath)

    val fs = FileSystem.get(sc.hadoopConfiguration)
    val combinedhdfsPath = fs.listStatus(hdfsPath).map(_.getPath.toString).reduce(_ + "," + _)

    println(combinedhdfsPath)

    val domains : RDD[(String)] = sc.objectFile[(String, Iterable[HeaderInfo])](combinedhdfsPath).map(_._1).coalesce(5000)

    /**
     * Parses the TLD, side effect is that it doesn't discern between IPs and real domains
     * @param domain
     * @return
     */
    def getTLD(domain : String): String = {
      val lastIndex = domain.lastIndexOf('.')
      val substrStart = lastIndex + 1
      var result = domain
      if (lastIndex != -1) {
        if (substrStart < domain.length) {
          result = domain.substring(substrStart)
        } else {
          result = "unknown"
        }
      } else {
        result = "unknown"
      }
      result
    }

    val domainCount : RDD[(String, Int)] = domains
      .map(x => (getTLD(x), 1))
      .reduceByKey(_ + _)

    domainCount.saveAsTextFile(hdfsOutputPath)
  }
}
