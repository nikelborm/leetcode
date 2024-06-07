// https://leetcode.com/problems/move-zeroes/description/

import { deepEqual, equal } from 'assert';
import { it } from 'node:test';

// Do not return anything, modify numbers in-place instead.

function moveZeroes(numbers: number[]): void {
  if( numbers.length < 2 ) return;
  let leftZeroIndex = numbers.findIndex(e => !e);

  if ( leftZeroIndex === -1 || leftZeroIndex === numbers.length - 1 ) return;

  let zerosPoolLength = 1;

  for (let index = leftZeroIndex + 1; index < numbers.length; index++) {
    if (numbers[index] === 0) {
      zerosPoolLength += 1;
    } else {
      numbers[leftZeroIndex] = numbers[index];
      numbers[index] = 0;
      leftZeroIndex += 1;
    }
  }
};

it('case 1', () => {
  const arr = [1, 12, -5, -6, 50, 3]
  moveZeroes(arr);
  deepEqual(arr, [1, 12, -5, -6, 50, 3])
})

it('case 2', () => {
  const arr = [1, 12, -5, -6, 50, 0]
  moveZeroes(arr);
  deepEqual(arr, [1, 12, -5, -6, 50, 0])
})

it('case 3', () => {
  const arr = [1, 12, 0, -6, 50, 0]
  moveZeroes(arr);
  deepEqual(arr, [1, 12, -6, 50, 0, 0])
})

it('case 4', () => {
  const arr = [1, 12, 0, 0, 50, 0]
  moveZeroes(arr);
  deepEqual(arr, [1, 12, 50, 0, 0, 0])
})

it('case 5', () => {
  const arr = [0, 12, 0, 0, 50, 0]
  moveZeroes(arr);
  deepEqual(arr, [12, 50, 0, 0, 0, 0])
})

it('case 6', () => {
  const arr = [0,1,0,3,12]
  moveZeroes(arr);
  deepEqual(arr, [1,3,12,0,0])
})

it('case 7', () => {
  const arr = [0]
  moveZeroes(arr);
  deepEqual(arr, [0])
})

it('case 8', () => {
  const arr = [2]
  moveZeroes(arr);
  deepEqual(arr, [2])
})

it('case 9', () => {
  const arr = [2, 0]
  moveZeroes(arr);
  deepEqual(arr, [2, 0])
})

it('case 10', () => {
  const arr = [0, 2]
  moveZeroes(arr);
  deepEqual(arr, [2, 0])
})


it('case 11', () => {
  const arr = []
  moveZeroes(arr);
  deepEqual(arr, [])
})


it('case 12', () => {
  const arr = [1, 0, 0, 0, 0, 0]
  moveZeroes(arr);
  deepEqual(arr, [1, 0, 0, 0, 0, 0])
})

it('case 13', () => {
  const arr = [0, 0, 0, 0, 0, 1]
  moveZeroes(arr);
  deepEqual(arr, [1, 0, 0, 0, 0, 0])
})

it('case 14', () => {
  const arr = [0, 0, 0, 0, 0, 0]
  moveZeroes(arr);
  deepEqual(arr, [0, 0, 0, 0, 0, 0])
})
