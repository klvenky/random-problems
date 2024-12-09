// https://leetcode.com/problems/minimum-absolute-difference-in-bst
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
function getMinimumDifference(root) {
  const nodes = [];
  function traverse(node) {
    if (node == null || node.val == null) return;
    else {
      if (node.left !== null) traverse(node.left);
      nodes.push(node.val);
      if (node.right !== null) traverse(node.right);
    }
  }

  traverse(root);
  return minDiff(nodes);
}

/**
 *
 * @param {Array<number>} nodes
 */
function minDiff(nodes) {
  let minDiff = Infinity;
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i; j < nodes.length; j += 1) {
      if (i == j) continue;
      const currDiff = nodes[j] - nodes[i];
      minDiff = Math.min(currDiff, minDiff);
    }
  }
  return minDiff;
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
      right: { val: 6, left: null, right: null },
    },
    result: 1,
  },
  {
    input: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: {
        val: 48,
        left: { val: 12, left: null, right: null },
        right: { val: 49, left: null, right: null },
      },
    },
    result: 1,
  },
  {
    input: {
      val: 543,
      left: {
        val: 384,
        left: null,
        right: { val: 445, left: null, right: null },
      },
      right: {
        val: 652,
        left: null,
        right: { val: 699, left: null, right: null },
      },
    },
    result: 47,
  },
];

test("getMinimumDifference", () => {
  for (const scenario of scenarios) {
    const actual = getMinimumDifference(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
