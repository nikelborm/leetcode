// https://leetcode.com/problems/unique-email-addresses/description/

import assert, { deepEqual } from 'assert';
import { it } from 'node:test';

function numUniqueEmails(emails: string[]): number {
  return 0;
};

it('pass 1st test case', () => {
  assert.equal(numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ]), 2)
})

it('pass 2st test case', () => {
  assert.equal(numUniqueEmails([
    "a@leetcode.com",
    "b@leetcode.com",
    "c@leetcode.com"
  ]), 3)
})
