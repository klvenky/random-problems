// https://leetcode.com/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  let result = false;
  traverse(root);
  function traverse(node, prevPath = "") {
    if (node !== null && node?.val !== null) {
      const tmp = getPath(node.val, prevPath);
      if (!node.left && !node.right) {
        const sum = tmp
          .split("->")
          .filter((t) => t)
          .map((num) => parseInt(num))
          .reduce((sum, num) => sum + num, 0);
        if (sum == targetSum) {
          result = true;
        }
      } else {
        if (!result) {
          if (node.left) {
            traverse(node.left, tmp);
          }

          if (node.right) {
            traverse(node.right, tmp);
          }
        }
      }
    }
  }
  return result;
}

function getPath(nodeVal, prevPath = "") {
  return `${prevPath ? `${prevPath}->` : ""}${nodeVal}`;
}

function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
}

const scenarios = [
  {
    root: {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: { val: 7, left: null, right: null },
          right: { val: 2, left: null, right: null },
        },
        right: null,
      },
      right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
          val: 4,
          left: null,
          right: { val: 1, left: null, right: null },
        },
      },
    },
    targetSum: 22,
    result: true,
  },
  {
    root: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    targetSum: 5,
    result: false,
  },
  { root: null, targetSum: 0, result: false },
];

test("hasPathSum", () => {
  for (const scenario of scenarios) {
    const actual = hasPathSum(scenario.root, scenario.targetSum);
    expect(actual).toEqual(scenario.result);
  }
});
