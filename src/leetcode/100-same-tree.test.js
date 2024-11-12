// https://leetcode.com/problems/same-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (p === null && q !== null) return false;
  else if (q === null && p !== null) return false;
  else if (p === null && q === null) return true;
  else if (p.val !== q.val) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}

function traverseBinaryTree(node) {
  const nodes = [];
  console.log(`node:${JSON.stringify(node)}`);
  if (node === null || node.val === null) {
    console.log("adding null");
    nodes.push(null);
  } else {
    nodes.push(...traverseBinaryTree(node.left));
    console.log(`added: ${node.val}`);
    nodes.push(node.val);
    nodes.push(...traverseBinaryTree(node.right));
  }

  console.log(`node: ${JSON.stringify(node)} nodes:${nodes}`);
  return nodes;
}

const scenarios = [
  {
    p: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    q: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    result: true,
  },
  {
    p: { val: 1, left: { val: 2, left: null, right: null }, right: null },
    q: { val: 1, left: null, right: { val: 2, left: null, right: null } },
    result: false,
  },
  {
    p: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
    q: {
      val: 1,
      left: { val: 1, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    result: false,
  },
  {
    p: {
      val: 2,
      left: {
        val: 2,
        left: null,
        right: {
          val: 2,
          left: { val: 2, left: null, right: null },
          right: null,
        },
      },
      right: { val: 2, left: null, right: null },
    },
    q: {
      val: 2,
      left: { val: 2, left: { val: 2, left: null, right: null }, right: null },
      right: { val: 2, left: { val: 2, left: null, right: null }, right: null },
    },
    result: false,
  },
];

test("same tree", () => {
  for (const scenario of scenarios) {
    const { p, q, result: expected } = scenario;
    const actual = isSameTree(p, q);
    expect(actual).toEqual(expected);
  }
});
