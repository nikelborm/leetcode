// https://leetcode.com/problems/roman-to-integer/description/

const map: {[k: string]: number} = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanToInt(s: string): number {
  let index = 0;
  let num = 0;
  while (index !== s.length) {
      const current = s[index]
      const next = s[index+1]
      num += map[current + next] || map[current];
      index += 1 + ~~((current + next) in map);
  }
  return num;
}
