import java.util.Date

import datastructure.helper.ServerHelper
import org.apache.spark.SparkContext._
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

/**
 * Retrieves some statistics from the object files
 * Playground
 */
object PlatformCount {

  def main(args : Array[String]): Unit = {
    val conf = new SparkConf().setAppName("PlatformCount")
    val sc = new SparkContext(conf)
    type HeaderInfo =  (Date, Map[String, String])
    type DomainToHeaderInfo = (String, HeaderInfo)

    val hdfsPath = args(0) // the object files directory
    println(hdfsPath)

    val groupFilteredRdd : RDD[(String, Iterable[HeaderInfo])] = sc.objectFile[(String, Iterable[HeaderInfo])](hdfsPath)

    println("Number of domains: " + groupFilteredRdd.count())

    /**
     * For each platform version, the total number of domains
     * For each platform, the total number number of domains
     * Total unique #domains
     */

    val serverValuePerDomain : RDD[(List[String], String)] = groupFilteredRdd.map{x =>
      val headersMap : Map[String, String] = x._2
        .map(_._2) // only map, discarding date
        .fold(Map.empty[String, String])( (a,b) => a ++ b) // merge maps
      val allPlatforms : List[String] = ServerHelper.getAllPlatformsRawServerHeader(headersMap)
      (allPlatforms, x._1)} // result is the list of platforms -> domain

    val serverPlatformsPerDomain : RDD[(String, String)] = serverValuePerDomain.flatMap{ x =>
      val (platforms, domain) = x
      val result : List[(String, String)] = platforms.map((_,domain))
      result
    }

    val serverPlatformsWordCount : RDD[(String, Int)] = serverPlatformsPerDomain
      .flatMap(x => x._1.split(Array(' ', '/')))
      .map(x => (x, 1))
      .reduceByKey(_ + _)
      .map(x => (x._2, x._1))
      .sortByKey(ascending = false)
      .map(x => (x._2, x._1))

    val serverPlatformDomains : RDD[(String, Iterable[String])] = serverPlatformsPerDomain.groupByKey()
    val serverPlatformVersionCount : RDD[(String, Int)] = serverPlatformDomains.map(x => (x._1, x._2.size))

    val serverPlatformAggegrated : RDD[(String, Iterable[Iterable[String]])] = serverPlatformDomains.map(x => (ServerHelper.stripVersion(x._1),x._2)).groupByKey()
    val serverPlatformAggregatedCount : RDD[(String, Int)] = serverPlatformAggegrated.map(x => (x._1, x._2.map(_.size).fold(0)(_ + _)))

    println("Word count: ")
    serverPlatformsWordCount.collect().foreach(x => println(x._1 + " " + x._2))

    println("Non aggregated: ")
    serverPlatformVersionCount.collect().foreach(x => println(x._1 + " " + x._2))

    println()
    println("Aggregated: ")
    serverPlatformAggregatedCount.collect().foreach(x => println(x._1 + " " + x._2))
  }
}