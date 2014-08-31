package datastructure.helper

import org.jwat.common.{HeaderLine, HttpHeader}
import org.jwat.warc.WarcRecord

object HeaderHelper {

  /**
   * Returns a map of header -> value from a given list of headers of a WARC record
   *
   * @param headers
   * @param warcRecord
   * @return
   */
  def getHeaders(headers: List[String], warcRecord : WarcRecord) : Map[String, String] = {
    val httpHeader : Option[HttpHeader] = Option(warcRecord.getHttpHeader)

    def getHeaders(headers: List[String]) : Map[String, String] = {
      headers match {
        case x :: xs =>
          val currentHeader : String = x
          val httpHeaderLine : Option[HeaderLine] = Option(httpHeader.get.getHeader(currentHeader))
          val tempMap = httpHeaderLine match {
            case Some(headerLine) =>  Map(x -> headerLine.value)
            case None => Map.empty
          }
          tempMap ++ getHeaders(xs)
        case _ => Map.empty
      }
    }

    if (httpHeader.isEmpty) {
      Map.empty
    } else {
      getHeaders(headers)
    }
  }
}

