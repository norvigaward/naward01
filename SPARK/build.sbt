name := "DataScience2014"

version := "1.0"

scalaVersion := "2.10.4"

resolvers += "SURFSARA repository" at "http://beehub.nl/surfsara-repo/releases"

libraryDependencies ++= Seq(
  "org.apache.spark" % "spark-core_2.10" % "1.0.2" % "provided",
  "org.jwat" % "jwat-warc" % "1.0.1",
  "SURFsara" % "warcutils" % "1.2"
)

