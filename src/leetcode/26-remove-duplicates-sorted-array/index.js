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

module.exports = { removeDuplicates };
