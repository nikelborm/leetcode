// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): [number, number] {
  const enumeratedNums = Object.entries(nums);

  const reversedMap = new Map(enumeratedNums.map(([i,v])=>[v,i]));

  for(const [currentIndex, currentNum] of enumeratedNums) {
      const reverseIndex = reversedMap.get(target - currentNum);

      if(reverseIndex && (currentIndex !== reverseIndex))
          return [
            parseInt(reverseIndex),
            parseInt(currentIndex)
        ]
  }
  throw new Error();
};
