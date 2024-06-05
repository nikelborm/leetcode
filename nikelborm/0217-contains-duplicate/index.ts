// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
  return (new Set(nums)).size !== nums.length;
};
