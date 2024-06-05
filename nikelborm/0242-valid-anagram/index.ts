const getCountMap = (str: string) => {
  return [...str].reduce(
    (acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc),
    Object.create(null) as Record<string, number>,
  )
};

function isAnagram(s: string, t: string): boolean {
  const sMap = getCountMap(s);
  const tMap = getCountMap(t)
  return Object
    .entries(tMap)
    .every(([letter,count]) => sMap[letter] === count)
    && (Object.keys(sMap).length === Object.keys(tMap).length)
};
