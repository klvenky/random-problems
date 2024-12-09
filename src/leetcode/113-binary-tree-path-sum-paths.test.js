// https://leetcode.com/problems/path-sum-ii
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.left = (left==undefined ? null : left)
 *     this.right = (right==undefined ? null : right)
 * }
 */
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
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
  const matchingPaths = new Set();
  traverse(root);
  function traverse(node, pathNodes = []) {
    if (node !== null && node?.val !== null) {
      const tmp = getPath(node.val, pathNodes);
      if (!node.left && !node.right) {
        const sum = tmp.reduce((sum, num) => sum + num, 0);
        if (sum == targetSum) {
          matchingPaths.add(tmp);
        }
        pathNodes = [];
      } else {
        if (node.left) {
          traverse(node.left, [...tmp]);
        }

        if (node.right) {
          traverse(node.right, [...tmp]);
        }
      }
    }
  }
  return Array.from(matchingPaths);
}

function getPath(nodeVal, pathNodes = []) {
  const newPath = [...pathNodes, nodeVal];
  return newPath;
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
          left: { val: 5, left: null, right: null },
          right: { val: 1, left: null, right: null },
        },
      },
    },
    targetSum: 22,
    result: [
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ],
  },
  {
    root: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    targetSum: 5,
    result: [],
  },
  // {
  //   root: { val: 1, left: { val: 2, left: null, right: null }, right: null },
  //   targetSum: 0,
  //   result:[]
  // },
];

test("pathSum", () => {
  for (const scenario of scenarios) {
    const actual = pathSum(scenario.root, scenario.targetSum);
    // console.log(JSON.stringify({ expected: scenario.result, actual }));
    expect(actual).toEqual(scenario.result);
  }
});
