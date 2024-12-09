// https://leetcode.com/problems/count-complete-tree-nodes
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
 * @return {number}
 */
let count = 0;
function countNodes(node, first = true) {
  if (first) count = 0;
  if (node !== null) {
    count += 1;
    countNodes(node.left, false);
    countNodes(node.right, false);
  }
  // * See why this is faster
  //   if (node == null) return 0;
  //   return countNodes(node.left, false) + 1 + countNodes(node.right, false);
  //   return count;
  return count;
}

const scenarios = [
  {
    input: {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
      right: { val: 3, left: { val: 6, left: null, right: null }, right: null },
    },
    result: 6,
  },
  {
    input: null,
    result: 0,
  },
  {
    input: { val: 1, left: null, right: null },
    result: 1,
  },
];

test("countNodes", () => {
  for (const scenario of scenarios) {
    const actual = countNodes(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
