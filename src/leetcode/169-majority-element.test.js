//https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const map = new Map();
  let currentMax = 0;
  let maxOccurances = 0;
  nums.forEach((num) => {
    // for (const num of nums) {
    const prev = map.get(num) ?? 0;
    const nextVal = prev + 1;
    map.set(num, nextVal);
    if (nextVal > maxOccurances) {
      maxOccurances = nextVal;
      currentMax = num;
    }
    // }
  });

  return currentMax;
}

const scenarios = [
  // {
  //   input: [2, 2, 1, 1, 1, 2, 2],
  //   result: 2,
  // },
  // {
  //   input: [3, 2, 3],
  //   result: 3,
  // },
  {
    input: [6, 5, 5],
    result: 5,
  },
];

test("majorityElement", () => {
  for (const scenario of scenarios) {
    const actual = majorityElement(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
