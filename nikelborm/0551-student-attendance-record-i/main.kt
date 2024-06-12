// https://leetcode.com/problems/student-attendance-record-i/description/

class Solution {
  fun checkRecord(s: String): Boolean {
    var timesWasAbsent: Byte = 0
    var timesWasLate: Byte = 0
    val consecutiveLatesNeededToBeBanned: Byte = 3
    val absencesNeededToBeBanned: Byte = 2

    for (l in s) {
      if(l === 'A') timesWasAbsent++
      if(timesWasAbsent === absencesNeededToBeBanned) return false
      if(l === 'L')
        timesWasLate++
      else
        timesWasLate = 0.toByte()
      if(timesWasLate === consecutiveLatesNeededToBeBanned) return false
    }
    return true
  }
}

val sol = Solution()

val test = mapOf(
  "PPALLP" to true,
  "PPALLL" to false
)

for (i in test) {
  val result = sol.checkRecord(i.key);

  if (result !== i.value)
    throw Exception("checkRecord(${i.key})=${result}. Expected ${i.value}")
  println("checkRecord(${i.key}) is fine ❤️ ")
}
