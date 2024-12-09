// https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.left = (left==undefined ? null : left)
 *     this.right = (right==undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(node) {
  let result = 0;
  if (node !== null) {
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);
    result = 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
  }
  return result;
}

const scenarios = [
  {
    input: {
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    },

    result: 3,
  },
  {
    input: { val: 1, left: null, right: { val: 2, left: null, right: null } },
    result: 2,
  },
];

test("maxDepth", () => {
  for (const scenario of scenarios) {
    const actual = maxDepth(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
