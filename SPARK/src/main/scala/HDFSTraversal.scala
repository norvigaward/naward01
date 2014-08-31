import org.apache.hadoop.fs.{FileSystem, Path}
import org.apache.spark.{SparkConf, SparkContext}

/**
 * Helper file to traverse HDFS
 */
object HDFSTraversal {

  /**
   * Generic function to find all paths with a certain directory name
   *
   * @param currentPath
   * @param fs
   * @param dirName
   * @return
   */
  def getAllPathsOfDirName(currentPath : Path, fs : FileSystem, dirName : String) : List[Path] = {
      fs.getFileStatus(currentPath).isDir match {
        case true =>
          currentPath.getName match {
            case `dirName` => List(currentPath)
            case _ => fs.listStatus(currentPath).map(fileStatus => getAllWarcPaths(fileStatus.getPath, fs)).fold(List.empty)(_ ++ _)
          }
        case false => Nil
      }
  }

  /**
   * Returns all directory paths with the name "warc"
   * @param currentPath
   * @param fs
   * @return
   */
  def getAllWarcPaths(currentPath : Path, fs : FileSystem) : List[Path] = {
    getAllPathsOfDirName(currentPath, fs, "warc")
  }

  /**
   * Returns all files in WARC directories
   *
   * @deprecated
   * @param currentPath
   * @param fs
   * @return
   */
  def getAllWarcFilePaths(currentPath : Path, fs : FileSystem): List[Path] = {
    getAllWarcPaths(currentPath, fs).flatMap(x => fs.listStatus(x).map(fileStatus => {
      println(fileStatus.getPath)
      fileStatus.getPath})
    )
  }

  /**
   * Small test to print out the warc dir paths of the main dataset
   * @param args
   */
  def main(args : Array[String]) {
    val conf = new SparkConf().setAppName("HDFSTraversal")
    val sc = new SparkContext(conf)
    val hdfsPathString = "hdfs:/data/public/common-crawl/crawl-data/CC-MAIN-2014-10"
    val hdfsPath = new Path(hdfsPathString)
    val fs = FileSystem.get(sc.hadoopConfiguration)
    getAllWarcPaths(hdfsPath, fs).foreach(println)
  }
}
