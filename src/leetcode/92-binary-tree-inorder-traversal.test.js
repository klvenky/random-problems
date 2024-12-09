// https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
}

function inorderTraversalIterative(node) {
  const traversal = [];

  let done = false;
  let temp = node;
  while (temp && (temp.left || temp.right)) {
    console.log(`visited ${temp.val}`);
    traversal.push(temp.val);
    // console.log(`temp: ${JSON.stringify(temp)} -> ${traversal}`);
    if (temp?.left) {
      console.log("going left");
      temp = temp?.left;
    } else if (temp?.right) {
      console.log(`going right -> ${JSON.stringify(temp.right)}`);
      temp = temp?.right;
    } else if (temp.right == null && temp.right == null) {
      console.log("exiting");
      done = true;
    }
  }

  return traversal;
}

function inorderTraversalRecursive(node) {
  const traversal = [];
  if (node == null) {
  } else if (node.left == null && node.right == null) {
    traversal.push(node.val);
  } else {
    if (node.left) {
      traversal.push(...inorderTraversalRecursive(node.left));
    }

    traversal.push(node.val);
    if (node.right) {
      traversal.push(...inorderTraversalRecursive(node.right));
    }
  }
  return traversal;
}

const scenarios = [
  {
    input: {
      val: 1,
      left: null,
      right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
    },
    output: [1, 3, 2],
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
    output: [4, 2, 6, 5, 7, 1, 3, 9, 8],
  },
  {
    input: null,
    output: [],
  },
  {
    input: { val: 1, left: null, right: null },
    output: [1],
  },
];

test("binary tree in order traversal", () => {
  for (const scenario of scenarios) {
    const actual = inorderTraversalRecursive(scenario.input);
    // console.log(JSON.stringify({ expected: scenario.output, actual }));
    expect(actual.join()).toEqual(scenario.output.join());
    // const actual = inorderTraversalIterative(scenario.input);
    // console.log(JSON.stringify({ expected: scenario.output, actual }));
    // expect(actual.join()).toEqual(scenario.output.join());
  }
});
