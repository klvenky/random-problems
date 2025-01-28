// https://leetcode.com/problems/rotate-array/description
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const initLen = nums.length;
  const result = [];
  for (let index = 1; index <= k; index += 1) {
    const numPos = initLen - index;
    console.log(`index:${index} -> numPos:${numPos} -> Elem: ${nums[numPos]}`);
    if (numPos >= 0) {
      result.unshift(nums[numPos]);
      console.log(`adding ${nums[numPos]} at start`);
      console.log(result);
    } else {
      // nums = result;
      // result.push(nums[initLen - index]);
    }
  }
  nums = [...result, ...nums];
  console.log(`final -> ${nums}`);
  nums.length = initLen;
  return nums;
}

const scenarios = [
  // {
  //   nums: [1, 2, 3, 4, 5, 6, 7],
  //   k: 3,
  //   result: [5, 6, 7, 1, 2, 3, 4],
  // },
  // {
  //   nums: [-1, -100, 3, 99],
  //   k: 2,
  //   result: [3, 99, -1, -100],
  // },
  // {
  //   nums: [1, 2],
  //   k: 5,
  //   result: [2, 1],
  // },
  {
    nums: [1, 2],
    k: 3,
    result: [2, 1],
  },
];

test.skip("rotate", () => {
  for (const scenario of scenarios) {
    const actual = rotate(scenario.nums, scenario.k);
    expect(actual).toEqual(scenario.result);
  }
});
