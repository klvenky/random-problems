// https://leetcode.com/problems/binary-tree-paths/description/

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
 * @return {string[]}
 */
function binaryTreePaths(root) {
  const set = traverse(root);
  const routes = Array.from(set);
  // console.log(routes);
  return routes;
}

function getPath(nodeVal, prevPath = "") {
  return `${prevPath ? `${prevPath}->` : ""}${nodeVal}`;
}

function traverse(node, prevPath = "", set = new Set()) {
  if (node?.val !== null) {
    const tmp = getPath(node.val, prevPath);
    if (!node.left && !node.right) {
      set.add(tmp);
    } else {
      if (node.left) {
        traverse(node.left, tmp, set);
      }

      if (node.right) {
        traverse(node.right, tmp, set);
      }
    }
  }
  return set;
}

const scenarios = [
  {
    input: {
      val: 1,
      left: { val: 2, left: null, right: { val: 5, left: null, right: null } },
      right: { val: 3, left: null, right: null },
    },
    result: ["1->2->5", "1->3"],
  },
  {
    input: { val: 1, left: null, right: null },
    result: ["1"],
  },
];

test("binaryTreePaths", () => {
  for (const scenario of scenarios) {
    const actual = binaryTreePaths(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
