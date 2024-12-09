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
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(node, val) {
  // return bst2(node, val);
  let match = null;

  if (node !== null) {
    if (node.val == val) {
      return node;
    } else {
      const matchInRightNode = searchBST(node.right, val);

      if (matchInRightNode) return matchInRightNode;
      else {
        const matchInLeftNode = searchBST(node.left, val);
        if (matchInLeftNode) {
          return matchInLeftNode;
        }
      }
    }
  }
  // TODO See if we can make this as iterative
  return match;
}

function bst2(node, val) {
  let done = false;
  let result = null;
  while (!done) {
    if (node.val == val) {
      result = node;
      done = true;
    } else {
      if (node.val < val) {
      }
    }
  }
  return result;
}

const scenarios = [
  {
    root: {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: { val: 7, left: null, right: null },
    },
    match: 2,
    result: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  },
  {
    root: {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: { val: 7, left: null, right: null },
    },
    match: 5,
    result: null,
  },
];

test("search BST", () => {
  for (const scenario of scenarios) {
    const actual = searchBST(scenario.root, scenario.match);
    expect(actual).toEqual(scenario.result);
  }
});
