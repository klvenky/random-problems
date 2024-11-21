// https://leetcode.com/problems/find-mode-in-binary-search-tree

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
 * @return {number[]}
 */

function findMode(node) {
  const { map, maxCount } = traverse(node);
  return Object.entries(map)
    .filter(([k, v]) => v === maxCount)
    .map(([k]) => parseInt(k));
}

function traverse(node, map = {}, maxCount = Number.MIN_SAFE_INTEGER) {
  if (node !== null) {
    const { val, left, right } = node;
    if (!map[val]) map[val] = 1;
    else map[val] += 1;
    if (maxCount < map[val]) {
      maxCount = map[val];
    }
    const r1 = traverse(left, map, maxCount);
    const r2 = traverse(right, r1.map, r1.maxCount);
    map = r2.map;
    maxCount = r2.maxCount;
  }

  return { map, maxCount };
}

const scenarios = [
  {
    input: {
      val: 1,
      left: null,
      right: { val: 2, left: { val: 2, left: null, right: null }, right: null },
    },
    result: [2],
  },
  {
    input: { val: 0, left: null, right: null },
    result: [0],
  },
];

test("findMode", () => {
  for (const scenario of scenarios) {
    const actual = findMode(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
