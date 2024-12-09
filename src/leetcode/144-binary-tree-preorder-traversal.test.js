// https://leetcode.com/problems/binary-tree-preorder-traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.left = (left==undefined ? null : left)
 *     this.right = (right==undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//   console.log(JSON.stringify(root));
// };

function preorderTraversal(node, result = []) {
  if (node == null) return result;
  if (node !== null && node.val !== null) {
    result.push(node.val);
    if (node.left !== null) preorderTraversal(node.left, result);
    if (node.right !== null) preorderTraversal(node.right, result);
  }
  return result;
}

const scenarios = [
  {
    input: {
      val: 1,
      left: null,
      right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
    },
    result: [1, 2, 3],
  },
  {
    input: {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: {
          val: 5,
          left: { val: 6, left: null, right: null },
          right: { val: 7, left: null, right: null },
        },
      },
      right: {
        val: 3,
        left: null,
        right: {
          val: 8,
          left: { val: 9, left: null, right: null },
          right: null,
        },
      },
    },
    result: [1, 2, 4, 5, 6, 7, 3, 8, 9],
  },
  {
    input: null,
    result: [],
  },
  {
    input: { val: 1, left: null, right: null },
    result: [1],
  },
];

test("preorderTraversal", () => {
  for (const scenario of scenarios) {
    const actual = preorderTraversal(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
