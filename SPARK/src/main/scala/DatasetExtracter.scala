import java.util.Date

import datastructure.helper.HeaderHelper
import nl.surfsara.warcutils.WarcInputFormat
import org.apache.hadoop.fs.{FileSystem, Path}
import org.apache.hadoop.io.LongWritable
import org.apache.spark.SparkContext._
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}
import org.jwat.warc.{WarcConstants, WarcRecord}

/**
 * Extracts the information from the dataset into binary object files.
 */
object DatasetExtracter {

  def main(args : Array[String]) {
    val conf = new SparkConf().setAppName("DatasetExtracter")
    val sc = new SparkContext(conf)

    val inputPath = new Path(args(0)) // "/data/public/common-crawl/crawl-data/CC-MAIN-2014-10"
    val outputDir = args(1) + "/dataset_extracter_" + System.currentTimeMillis() // "/user/naward01"
    println(inputPath, outputDir)

    val fs = FileSystem.get(sc.hadoopConfiguration)

    val filePaths = HDFSTraversal.getAllWarcPaths(inputPath, fs).map(_ + "/*")

    filePaths.par.foreach(filePath => {
      val rdd: RDD[(LongWritable, WarcRecord)] = sc.newAPIHadoopFile(filePath, classOf[WarcInputFormat], classOf[LongWritable], classOf[WarcRecord])
      val listOfHeaders: List[String] = List("Server", "X-Powered-By", "X-Runtime", "X-Version", "X-AspNet-Version")

      type HeaderInfo = (Date, Map[String, String])
      type DomainToHeaderInfo = (String, HeaderInfo)

      val filteredRdd: RDD[DomainToHeaderInfo] = rdd
        .map(x => x._2)
        .filter(x =>
        x.header.warcTypeIdx == WarcConstants.RT_IDX_RESPONSE // only responses
          && Option(x.header.warcTargetUriUri).isDefined) // only with valid uri
        .map { x =>
        val map: Map[String, String] = HeaderHelper.getHeaders(listOfHeaders, x)
        (x.header.warcTargetUriUri.getHost, (x.header.warcDate, map))
      }
      val groupFilteredRdd : RDD[(String, Iterable[HeaderInfo])] = filteredRdd.groupByKey()
      groupFilteredRdd.saveAsObjectFile(outputDir + "/" + System.currentTimeMillis());
    })
  }
}
