// https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
 * @return {number}
 */
function minDepth(node) {
  let result = 0;
  // console.log(JSON.stringify(node))
  if (node !== null) {
    const leftDepth = minDepth(node.left);
    const rightDepth = minDepth(node.right);
    // result = 1 + (leftDepth < rightDepth ? leftDepth : rightDepth);
    if (leftDepth === 0 && rightDepth === 0) {
      result += 1;
    } else if (leftDepth === 0) {
      result += 1 + rightDepth;
    } else if (rightDepth === 0) {
      result += 1 + leftDepth;
    } else {
      result = 1 + (leftDepth < rightDepth ? leftDepth : rightDepth);
    }
  }
  return result;
}

const scenarios = [
  {
    input: {
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    },
    result: 2,
  },
  {
    input: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: {
            val: 5,
            left: null,
            right: { val: 6, left: null, right: null },
          },
        },
      },
    },
    result: 5,
  },
];

test.skip("minDepth", () => {
  for (const scenario of scenarios) {
    const actual = minDepth(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
