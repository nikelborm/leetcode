// https://leetcode.com/problems/group-anagrams/description/
// interface ObjectConstructor {
//   groupBy
// }

// @ts-ignore
if(typeof Object.groupBy === typeof undefined) {
  // @ts-ignore
  Object.groupBy = (arr, callback) => {
    return arr.reduce((acc = {}, ...args) => {
      const key = callback(...args);
      acc[key] ??= []
      acc[key].push(args[0]);
      return acc;
    }, {})
  }
}

function groupAnagrams(strings: string[]) {
  return Object.values(
    // @ts-ignore
    Object.groupBy(
      strings,
      (e: string) => [...e].sort().join("")
    )
  );
}
