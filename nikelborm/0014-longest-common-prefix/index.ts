// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
  const shortestWordLength = Math.min(...strs.map((e) => e.length));
  let prev = "";
  for (let i = 1; i <= shortestWordLength; i++) {
    const set = new Set(strs.map((e) => e.slice(0, i)));
    if (set.size !== 1) return prev;
    prev = set[Symbol.iterator]().next().value;
  }
  return prev;
}
