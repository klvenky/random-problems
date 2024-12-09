// https://leetcode.com/problems/sum-of-left-leaves
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

function sumOfLeftLeaves(root) {
  const leftLeaves = [];
  findAllLeftLeaves(root);

  function findAllLeftLeaves(node) {
    if (node !== null && node.val !== null) {
      if (node.left && node.left.val && node.left.next == null) {
        leftLeaves.push(node.next.val);
      }
    }
  }

  // console.log(JSON.stringify({ leftLeaves }));

  let sum = 0;
  for (let node of leftLeaves) {
    sum += node;
  }
  return sum;
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
    result: 24,
  },
  {
    input: { val: 1, left: null, right: null },
    result: 0,
  },
];

test.skip("sumOfLeftLeaves", () => {
  for (const scenario of scenarios) {
    const actual = sumOfLeftLeaves(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
