// https://leetcode.com/problems/diameter-of-binary-tree
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
function diameterOfBinaryTree(node) {
  console.log(JSON.stringify(node));
  const diameter = temp(node);
  console.log(`in dbt -> ${diameter}`);
  const finalResult = /* 
    (node !== null && (node.left || node.right) ? 1 : 0) + */ diameter;
  console.log(`final REsult: ${finalResult}`);
  return finalResult;
}

function temp(node, side = "root", parent = "root") {
  let distance = 0;
  // console.log(
  //   `${pVal} => #${side} -> node:${JSON.stringify(node)} nodeVal: ${node?.val}`
  // );
  if (node !== null) {
    console.log(`init for ${node.val} in ${side} of ${parent} => ${distance} `);
    const { left, right, val } = node;
    const lcd = temp(left, "left", val);
    const rcd = temp(right, "right", val);
    // if (lcd > 0 || rcd > 0) {
    distance = Math.max(lcd, rcd) + 1;
    console.log(
      `incrementing distance by 1 for ${node.val}. new distance: ${distance}`,
    );
    // }
    console.log(
      JSON.stringify({ parent, val, left, right, lcd, rcd, distance }),
    );
  }

  return distance;
}

const scenarios = [
  // {
  //   input: {
  //     val: 1,
  //     left: {
  //       val: 2,
  //       left: { val: 4, left: null, right: null },
  //       right: { val: 5, left: null, right: null },
  //     },
  //     right: { val: 3, left: null, right: null },
  //   },
  //   result: 3,
  // },
  // {
  //   input: { val: 1, left: { val: 2, left: null, right: null }, right: null },
  //   result: 1,
  // },
];

test("diameter of binary tree", () => {
  for (const scenario of scenarios) {
    const actual = diameterOfBinaryTree(scenario.input);
    console.log({ actual, expected: scenario.result });
    expect(actual).toEqual(scenario.result);
  }
});
