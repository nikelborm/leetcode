// https://leetcode.com/problems/valid-perfect-square/description/

class Solution {
  fun isPerfectSquare(intNum: Int): Boolean {
    val doubleNum = intNum.toDouble()
    var intTemp = intNum
    var intPowerOfTwo = 0
    while (intTemp !== 0) {
      intPowerOfTwo++
      intTemp /= 2
    }

    var sqrtEventually = doubleNum
    while (true) {
      intPowerOfTwo--;
      if (sqrtEventually * sqrtEventually == doubleNum) return true
      if (intPowerOfTwo == 0) return false

      val candidate = (
        if (sqrtEventually * sqrtEventually < doubleNum) +1.0 else -1.0
      ) * Math.pow(2.0, intPowerOfTwo.toDouble());

      if (sqrtEventually + candidate > 0) sqrtEventually += candidate
    }
    throw Exception("WTF???")
  }
}







// 10 minus preclosest to highest power of 2
// n = 10
// n = n - 2^3 = 2
// n * n == 10? no. continue search
// power == 0? no. continue search
// n * n < 10? yes. increase.
// n = n + 2^2 = 6
// n * n == 10? no. continue search
// power == 0? no. continue search
// n * n < 10? no. decrease
// n = n - 2^1 = 4
// n * n == 10? no. continue search
// power == 0? no. continue search
// n * n < 10? no. decrease
// n = n - 2^0 = 3
// n * n == 10? no. continue search
// power == 0? yes exit








val sol = Solution()

val test = mapOf<Int, Boolean>(
  1 to true,
  2 to false,
  3 to false,
  4 to true,
  5 to false,
  6 to false,
  7 to false,
  8 to false,
  9 to true,
  10 to false,
  11 to false,
  12 to false,
  13 to false,
  14 to false,
  15 to false,
  16 to true,
  17 to false,
  18 to false,
  19 to false,
  20 to false,
  21 to false,
  22 to false,
  23 to false,
  24 to false,
  25 to true,
  26 to false,
  27 to false,
  28 to false,
  29 to false,
  30 to false,
  31 to false,
  32 to false,
  33 to false,
  34 to false,
  35 to false,
  35 to true,
  808201 to true
)

for (i in test) {
  val result = sol.isPerfectSquare(i.key);

  if (result !== i.value)
    throw Exception("isPerfectSquare(${i.key})=${result}. Expected ${i.value}")
  println("isPerfectSquare(${i.key}) is fine ❤️ ")
}
