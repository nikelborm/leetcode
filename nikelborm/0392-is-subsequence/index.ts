// https://leetcode.com/problems/is-subsequence/description/

import { deepEqual, equal } from 'assert';
import { it } from 'node:test';

function isSubsequence(s: string, t: string): boolean {
    return false;
};

it('case 1', () => {
  equal(isSubsequence("abc", "ahbgdc"), true)
})

it('case 2', () => {
  equal(isSubsequence("axc", "ahbgdc"), false)
})
