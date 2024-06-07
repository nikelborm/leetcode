// https://leetcode.com/problems/add-digits/description/

function getSumOfDigits (fullNumber: number, lastDigit = 0): number {
  const newDigit = fullNumber % 10;
  return lastDigit + (
    fullNumber < 10
      ? fullNumber
      : getSumOfDigits((fullNumber - newDigit) / 10 , newDigit)
  );
}

const addDigits = (num: number) => num < 10 ? num : addDigits(getSumOfDigits(num))
