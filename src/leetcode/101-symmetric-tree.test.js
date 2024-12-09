// https://leetcode.com/problems/symmetric-tree/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  if (!root) {
    console.log("root is null. so returning true");
    return true;
  } else {
    function areMirrorNodes(n1, n2) {
      if (!n1 && !n2) return true;
      else if ((!n1 && n2) || (!n2 && n1)) return false;
      else {
        return (
          n1.val == n2.val &&
          areMirrorNodes(n1.left, n2.right) &&
          areMirrorNodes(n1.right, n2.left)
        );
      }
    }
    return areMirrorNodes(root.left, root.right);
  }
}

const scenarios = [
  // {
  //   root: {
  //     val: 1,
  //     left: {
  //       val: 2,
  //       left: { val: 3, left: null, right: null },
  //       right: { val: 4, left: null, right: null },
  //     },
  //     right: {
  //       val: 2,
  //       left: { val: 4, left: null, right: null },
  //       right: { val: 3, left: null, right: null },
  //     },
  //   },
  //   output: true,
  // },
  // {
  //   root: {
  //     val: 1,
  //     left: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  //     right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  //   },
  //   output: false,
  // },
  {
    root: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    output: false,
  },
];

test("isSymmetric", () => {
  for (const scenario of scenarios) {
    const actual = isSymmetric(scenario.root);
    expect(actual).toEqual(scenario.output);
  }
});
