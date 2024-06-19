// https://leetcode.com/problems/maximum-average-subarray-i/description/

import { equal } from 'assert';
import { it } from 'node:test';

function findMaxAverage(numbers: number[], k: number): number {
  let currentSum = numbers.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let bestSum = currentSum;
  for (let index = k; index < numbers.length; index++) {
    currentSum = currentSum + numbers[index] - numbers[index - k]
    if(currentSum > bestSum)
      bestSum = currentSum
  }

  return bestSum / k;
};

it('case 1', () => {
  equal(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75000)
})

it('case 2', () => {
  equal(findMaxAverage([5], 1), 5)
})
