// https://leetcode.com/problems/merge-sorted-array/description/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  nums1.length = m;
  for (let j = n - 1; j >= 0; j -= 1) {
    let insertAt = 0;
    const curr = nums2[j];
    for (let i = m - 1; i >= 0; i -= 1) {
      const cond = nums1[i] > curr;
      if (cond) {
        continue;
      } else {
        insertAt = i + 1;
        break;
      }
    }
    if (insertAt === nums1.length) {
      nums1.push(curr);
    } else {
      nums1.splice(insertAt, 0, curr);
    }
  }
  nums1.length = m + n;
}

const scenarios = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    n: 3,
    nums2: [2, 5, 6],
    result: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    result: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    result: [1],
  },
  {
    nums1: [2, 0],
    m: 1,
    nums2: [1],
    n: 1,
    result: [1, 2],
  },
];

test("merge sorted array", () => {
  for (const scenario of scenarios) {
    const { m, n, nums1, nums2, result } = scenario;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(result);
  }
});
