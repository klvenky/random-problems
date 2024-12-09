// https://leetcode.com/problems/binary-tree-pruning

function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
}

function isLeafNode(node) {
  return node !== null && node.left == null && node.right == null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// TODO build a iterative solution
function pruneTree(node) {
  if (!node) return null;

  let res = null;
  const leaf = isLeafNode(node);
  const isOne = node.val == 1;
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
      if (node.left == null && node.right == null) {
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
  if (isLeafNode(res) && res.val == 0) res = null;

  return res;
}

function pruneTreeIterative(node) {
  if (!node) return null;

  const stack = [{ node, parent: null, isLeft: false }];
  const toDelete = new Set();

  while (stack.length > 0) {
    const { node, parent, isLeft } = stack.pop();

    if (node.left) {
      stack.push({ node: node.left, parent: node, isLeft: true });
    }
    if (node.right) {
      stack.push({ node: node.right, parent: node, isLeft: false });
    }

    if (isLeafNode(node) && node.val == 0) {
      toDelete.add(node);
    } else if (node.val == 0 && !node.left && !node.right) {
      toDelete.add(node);
    }
  }

  for (const node of toDelete) {
    if (node.parent) {
      if (node.isLeft) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    }
  }

  return node.val == 0 && !node.left && !node.right ? null : node;
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

test("prune tree without 1", () => {
  for (const scenario of scenarios) {
    const actual = pruneTree(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});

test.skip("prune tree without 1 iteratively", () => {
  for (const scenario of scenarios) {
    const actual = pruneTreeIterative(scenario.input);
    console.log(`expected:
----------------------------------
${JSON.stringify(scenario.result)}
----------------------------------
actual:
----------------------------------
${JSON.stringify(actual)}
----------------------------------
    `);
    expect(actual).toEqual(scenario.result);
  }
});
