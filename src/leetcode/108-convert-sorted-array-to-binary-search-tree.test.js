// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.left = (left==undefined ? null : left)
 *     this.right = (right==undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  let tree;
  // for (let i = 0; i < nums.length; i += 1) {
  //   if (!tree) {
  //     const next =
  //     // tree = new TreeNode(nums[i])
  //   }
  // }
  let done = false;
  let index = 0;
  let left;
  let right;
  while (!done) {
    if (!tree) {
      if (nums[index + 1] && nums[index + 1] < nums[index]) {
        left = new TreeNode(nums[index + 1], null, null);
      }

      if (
        nums[index + 2] &&
        nums[index + 2] > nums[index + 1] &&
        nums[index + 2] > nums[index]
      ) {
        right = new TreeNode(nums[index + 2], null, null);
      }

      tree = new TreeNode(nums[index], left, right);
      // if(nums[index+2] && nums[index+2]> nums[index+1])
      // tree = new TreeNode(nums[index], )
      index += 1;
    }
    done = true;
  }
  console.log(JSON.stringify(tree));
  return tree;
}
const scenarios = [
  {
    input: [-10, -3, 0, 5, 9],
    oneOf: [
      [0, -3, 9, -10, null, 5],
      [0, -10, 5, null, -3, null, 9],
    ],
  },
  {
    input: [1, 3],
    oneOf: [
      [1, null, 3],
      [3, 1],
    ],
  },
];

test.skip("sortedArrayToBST", () => {
  for (const scenario of scenarios) {
    const actual = sortedArrayToBST(scenario.input);
    expect(scenario.oneOf.includes(actual)).toEqual(true);
    // expect(actual).toEqual(scenario.result);
  }
});
