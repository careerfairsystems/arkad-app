#!/bin/sh
exec scala "$0" "$@"
!#

import scala.io.Source
import scala.collection.mutable.ArrayBuffer
import java.io._

object Main extends App {
    if (args.length == 0) {
        println("I need the filePath")
    }
    val fileName = args(0)
    println(s"FilePath is $fileName")
    var allLines = new ArrayBuffer[(String, Int)]()
    var whereToAddTwo = new ArrayBuffer[Int]()

    def addTwo(line: String): String = {
      val indexOfSecond = line.indexOf('"', line.indexOf('"') + 1)
      println(indexOfSecond)
      return line.patch(indexOfSecond, "-2", 0)
    }

    def findNextG(index: Int): Int = {
      i = index

      while(!allLines(i)._1.contains("</G>")){
        i = i + 1
      }
      i
    }

    for (line <- Source.fromFile(fileName).getLines) {
      if(line.trim.startsWith(s"<G id=${'"'}_")) {
        allLines.+=((line, 1))
      } else {
        allLines.+=((line, 0))
      }
    }

    var i: Int = 0

    for(line <- allLines){
      if(line._2 == 1){
        allLines(i) = (line._1.replace('{', '"').replace('}', '"'), 1)
        whereToAddTwo.append(i)
        println(i)
      }
      i = i + 1
    }

    var j: Int = 0
    for(index <- whereToAddTwo){
      allLines.insert(index + j + 1, ( addTwo(allLines(index + j)._1), 1) )
      allLines.insert(findNextG(index + j) + 1, ("  </G>", 1))
      j = j + 2
    }


    val pw = new PrintWriter(new File("h" + s"$fileName"))
    for(line <- allLines){
      pw.write(line._1 + '\n')
    }
    pw.close

}
