// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  // //* better than 36.6-65.6%
  const set = new Set();
  nums.forEach((num) => !set.has(num) && set.add(num));
  const uniq = Array.from(set);
  for (let i = 0; i < uniq.length; i += 1) nums[i] = uniq[i];
  return uniq.length;

  // //* better than 36.64%
  // const set = new Set();
  // for (let i = 0; i < nums.length; i += 1) {
  //   if (!set.has(nums[i])) {
  //     set.add(nums[i]);
  //     set.size;
  //     nums[set.size - 1] = nums[i];
  //   }
  // }
  // const uniq = Array.from(set);
  // return uniq.length;

  // //* better than 28.60%
  // let uniqNums = 0;
  // let uniq = [];
  // for (let i = 0; i < nums.length; i = i + 1) {
  //   const num = nums[i];

  //   if (!uniq.includes(num)) {
  //     uniqNums += 1;
  //     uniq.push(num);
  //     nums[uniqNums - 1] = num;
  //   }
  // }
  // return uniqNums;
}

function testHelper(input, output) {
  const result = removeDuplicates(input);
  expect(result).toEqual(output.length);
  for (let i = 0; i < output.length; i += 1)
    expect(input[i]).toEqual(output[i]);
}

test("remove duplicates in sorted array", () => {
  // const input1 = [1, 1, 2];
  // const expected1 = [1, 2];
  // const result = removeDuplicates(input1);
  // expect(result).toEqual(2);
  // for (let i = 0; i < result; i += 1) input1[i] == expected1[i];
  // testHelper([1, 1, 2], [1, 2]);
  testHelper([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]);
});
