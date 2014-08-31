package datastructure.helper

object ServerHelper {

  /**
   * The serverValue is a space delimited string
   * Used products are in the following format product/version
   *
   * We choose to ignore anything in the brackets
   *
   * @param serverValue
   */
  private def getPlatforms(serverValue : String) : Array[String] = {
    serverValue
      .filterNot(x => x == '(' || x == ')') // remove parentheses
      .split(" ")
//         .map(x => if (x.contains("/")) Option(x) else None).flatMap(x => x)
         .map(x => if (x.contains("/")) x else x + "/")
  }

  /**
   * Assumes input is in product/version, if it cannot find a / then the input is returns as is
   *
   * @param productAndVersion
   * @return
   */
  def stripVersion(productAndVersion : String) : String = {
    val versionEndIndex = productAndVersion.indexOf("/")
    if (versionEndIndex > 0 && versionEndIndex < productAndVersion.length)
      productAndVersion.substring(0, versionEndIndex)
    else {
      productAndVersion
    }
  }

  /**
   * Constructs the ASP.NET/version string if header is found
   * @param headersMap
   * @return
   */
  private def getAspNet(headersMap : Map[String, String]) : Option[String] = {
    val aspNetVersion : Option[String] = headersMap.get("X-AspNet-Version")
    if (aspNetVersion.isDefined) {
      Option("ASP.NET" + "/" + aspNetVersion.get)
    } else {
      None
    }
  }

  /**
   * Merges other headers into a single string, returns a list for compatibility with the other methods
   * @param headersMap
   * @return
   */
  def getAllPlatformsRawServerHeaderSingle(headersMap : Map[String, String]) : List[String] = {
    val serverHeader : String = headersMap.getOrElse("Server", "")
    val aspNet : Option[String] = getAspNet(headersMap)
    val xPoweredBy : Option[String] = headersMap.get("X-Powered-By")

    var result : List[String] = List(serverHeader)
    if (aspNet.isDefined) {
      result = aspNet.get :: result
    }
    if (xPoweredBy.isDefined) {
      result = xPoweredBy.get :: result
    }

    if (result.nonEmpty) {
      List(result.reduce(_ + " " + _))
    } else {
      List.empty
    }
  }

  /**
   * Get Server, X-Powered-By and X-AspNet-Version in a list if they exist.
   *
   * @param headersMap
   * @return
   */
  def getAllPlatformsRawServerHeader(headersMap : Map[String, String]) : List[String] = {
    val serverHeader : String = headersMap.getOrElse("Server", "")
    val aspNet : Option[String] = getAspNet(headersMap)
    val xPoweredBy : Option[String] = headersMap.get("X-Powered-By")

    var result : List[String] = List(serverHeader)
    if (aspNet.isDefined) {
      result = aspNet.get :: result
    }
    if (xPoweredBy.isDefined) {
      result = xPoweredBy.get :: result
    }

    result
  }

  /**
   * Retrieves all platforms with some parsing
   *
   * @deprecated
   * @param headersMap
   * @return
   */
  def getAllPlatforms(headersMap : Map[String, String]) : List[String] = {
    val serverHeader : Array[String] = getPlatforms(headersMap.getOrElse("Server", ""))
    val aspNet : Option[String] = getAspNet(headersMap)
    val xPoweredBy : Option[String] = headersMap.get("X-Powered-By")

    var result : List[String] = serverHeader.toList
    if (aspNet.isDefined) {
      result = aspNet.get :: result
    }
    if (xPoweredBy.isDefined) {
      result = getPlatforms(xPoweredBy.get).toList ::: result
    }
    result
  }

  /**
   * Prints out product and version
   * @deprecated
   * @param productAndVersion
   * @return
   */
  def prettyPrint(productAndVersion : String) : String = {
    val versionEndIndex = productAndVersion.indexOf("/")
    val product = productAndVersion.substring(0, versionEndIndex)
    if (versionEndIndex+1 < productAndVersion.length) {
      val version = productAndVersion.substring(versionEndIndex + 1)
      product + " " + version
    } else {
      product + " " + "#UNKNOWNVERSION#"
    }
  }

}
