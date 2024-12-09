// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

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
function findSecondMinimumValueSimple(
  node,
  min1 = Infinity,
  min2 = Infinity,
  root = true,
) {
  if (node) {
    if (node.val <= min1) min1 = node.val;
    else if (node.val < min2) min2 = node.val;

    min2 = findSecondMinimumValueSimple(node.right, min1, min2, false);
    min2 = findSecondMinimumValueSimple(node.left, min1, min2, false);
  }
  // console.log(`min2 for ${JSON.stringify(node)} -> ${JSON.stringify(min2)}`);
  if (root) return min2 == Infinity ? -1 : min2;
  else return min2;
}

function findSecondMinimumValueArray(node) {
  const [min1, min2] = findLeastTwoValues(node);
  return min2 == Infinity || !min2 ? -1 : min2;
}

function findLeastTwoValues(node, mins = []) {
  if (node && node.val) {
    if (mins.length < 2 && !mins.includes(node.val)) {
      mins.push(node.val);
    } else if (node.val <= mins[0]) {
      mins[0] = node.val;
    } else if (node.val < mins[1]) {
      mins[1] = node.val;
    }
    const res1 = findLeastTwoValues(node.right, mins);
    const res2 = findLeastTwoValues(node.left, res1);
    mins = res2;
  }
  return mins;
}

const scenarios = [
  {
    input: {
      val: 2,
      left: { val: 2, left: null, right: null },
      right: {
        val: 5,
        left: { val: 5, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    },
    result: 5,
  },
  {
    input: {
      val: 2,
      left: { val: 2, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    result: -1,
  },
  {
    input: {
      val: 5,
      left: { val: 8, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    result: 8,
  },
];

test("find second minimum value simple", () => {
  for (const scenario of scenarios) {
    const actual = findSecondMinimumValueSimple(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});

test("find second minimum value array", () => {
  for (const scenario of scenarios) {
    const actual = findSecondMinimumValueArray(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
