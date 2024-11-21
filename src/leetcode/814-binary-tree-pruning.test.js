// https://leetcode.com/problems/binary-tree-pruning
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// TODO build a iterative solution
function pruneTree(node, root = false) {
  if (!node) return null;

  let res = null;
  const leaf = isLeafNode(node);
  const isOne = node.val === 1;
  if (leaf) {
    if (!isOne) res = null;
    else res = new TreeNode(node.val, null, null);
  } else {
    // not leaf
    if (isOne) {
      // node is 1 so check for next
      res = new TreeNode(
        node.val,
        node.left ? pruneTree(node.left) : null,
        node.right ? pruneTree(node.right) : null,
      );
    } else {
      // node is definitely 0
      if (node.left === null && node.right === null) {
        res = null;
      } else {
        res = new TreeNode(
          node.val,
          node.left ? pruneTree(node.left) : null,
          node.right ? pruneTree(node.right) : null,
        );
      }
    }
  }
  // ensuring that if it's a leaf node after removing non-1 children & it's value is not 1
  if (isLeafNode(res) && res.val === 0) res = null;

  return res;
}

function pruneTreeIterative(node, root = false) {
  let left = node?.left ?? null;
  let right = node?.left ?? null;
  let result = null;
  while (node || left || right) {
    const isLeaf = isLeafNode(node);
    const isOne = node.val === 1;
    if (isLeaf && !isOne) break;
  }

  return result;
}
function isLeafNode(node) {
  return node !== null && node.left === null && node.right === null;
}

const scenarios = [
  {
    input: {
      val: 1,
      left: null,
      right: {
        val: 0,
        left: { val: 0, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    },
    result: {
      val: 1,
      left: null,
      right: {
        val: 0,
        left: null,
        right: { val: 1, left: null, right: null },
      },
    },
  },
  {
    input: {
      val: 1,
      left: {
        val: 0,
        left: { val: 0, left: null, right: null },
        right: { val: 0, left: null, right: null },
      },
      right: {
        val: 1,
        left: { val: 0, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    },
    result: {
      val: 1,
      left: null,
      right: {
        val: 1,
        left: null,
        right: { val: 1, left: null, right: null },
      },
    },
  },
  {
    input: {
      val: 1,
      left: {
        val: 1,
        left: {
          val: 1,
          left: { val: 0, left: null, right: null },
          right: null,
        },
        right: { val: 1, left: null, right: null },
      },
      right: {
        val: 0,
        left: { val: 0, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    },
    result: {
      val: 1,
      left: {
        val: 1,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: { val: 1, left: null, right: null },
      },
      right: {
        val: 0,
        left: null,
        right: { val: 1, left: null, right: null },
      },
    },
  },
  {
    input: {
      val: 1,
      left: null,
      right: {
        val: 0,
        left: { val: 0, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    },
    result: {
      val: 1,
      left: null,
      right: {
        val: 0,
        left: null,
        right: { val: 1, left: null, right: null },
      },
    },
  },
];

test.skip("prune tree without 1", () => {
  for (const scenario of scenarios) {
    const actual = pruneTree(scenario.input, true);
    expect(actual).toEqual(scenario.result);
  }
});

test("prune tree without 1 iteratively", () => {
  for (const scenario of scenarios) {
    const actual = pruneTreeIterative(scenario.input, true);
    expect(actual).toEqual(scenario.result);
  }
});

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
