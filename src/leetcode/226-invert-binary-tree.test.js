// https://leetcode.com/problems/invert-binary-tree
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
 * @return {TreeNode}
 */
function invertTree(node) {
  if (node == null || node.val == null) {
  } else {
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    invertTree(node.left);
    invertTree(node.right);
  }
  return node;
}

const scenarios = [
  {
    input: {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null },
      },
    },
    result: [4, 7, 2, 9, 6, 3, 1],
  },
  {
    input: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    result: [2, 3, 1],
  },
  {
    input: null,
    result: [],
  },
];

test.skip("invert binary tree", () => {
  for (const scenario of scenarios) {
    const actual = invertTree(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
