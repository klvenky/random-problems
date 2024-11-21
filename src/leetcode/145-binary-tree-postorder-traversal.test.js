// https://leetcode.com/problems/binary-tree-postorder-traversal
function postorderTraversal(node, result = []) {
  // console.error("postOrderTraversal not yet implemented");
  if (node !== null && node.val !== null) {
    if (node.left) postorderTraversal(node.left, result);
    if (node.right) postorderTraversal(node.right, result);
    result.push(node.val);
  }
  return result;
}

const scenarios = [
  {
    input: {
      val: 1,
      left: null,
      right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
    },
    result: [3, 2, 1],
  },
  {
    input: {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: {
          val: 5,
          left: { val: 6, left: null, right: null },
          right: { val: 7, left: null, right: null },
        },
      },
      right: {
        val: 3,
        left: null,
        right: {
          val: 8,
          left: { val: 9, left: null, right: null },
          right: null,
        },
      },
    },
    result: [4, 6, 7, 5, 2, 9, 8, 3, 1],
  },
  {
    input: null,
    result: [],
  },
  {
    input: { val: 1, left: null, right: null },
    result: [1],
  },
];

test("postOrderTraversal", () => {
  for (const scenario of scenarios) {
    const actual = postorderTraversal(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
