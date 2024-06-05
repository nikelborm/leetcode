// https://leetcode.com/problems/palindrome-number/description/

const getDigit = (x: number, pos: number) => Math.floor(x / 10 ** pos) % 10;
const getDigitAmount = (x: number) => Math.ceil(Math.log10(x + 1));

function isPalindrome(x: number): boolean {
  if (x < 10 && x >= 0) return true;
  if ((x % 10 === 0 && x > 0) || x < 0) return false;

  const digitAmount = getDigitAmount(x);

  for (let i = 0; i < digitAmount / 2; i++) {
    console.log(i);
    if (getDigit(x, i) !== getDigit(x, digitAmount - i - 1)) return false;
  }
  return true;
}
