// Source: https://leetcode.com/problems/add-two-numbers/description/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const getNodeFromNum = (input, firstRun = false) => {
  const intValue = BigInt.asUintN(64, `${input}`);
  // reminder is always < 10 so we don't need it as a bigint
  const remainder = Number(intValue % 10n);
  const quotient = intValue / 10n;
  let output;
  if (intValue === 0n && firstRun) {
    output = new ListNode(0, null);
  } else if (remainder >= 0 && quotient > 0n) {
    output = new ListNode(remainder, getNodeFromNum(quotient));
  } else {
    output = new ListNode(remainder, null);
  }
  return output;
};

const getNumFromListNode = (node, value = 0n, exponent = 0n) => {
  const tmp = BigInt(node.val) * 10n ** exponent + value;
  const newVal = BigInt.asUintN(64, tmp);
  if (node.next) {
    return getNumFromListNode(node.next, newVal, exponent + 1n);
  } else {
    return newVal;
  }
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const num1 = getNumFromListNode(l1);
  const num2 = getNumFromListNode(l2);
  const result = BigInt.asUintN(64,num1) +BigInt.asUintN(64, num2);
  // console.log({ num1, num2, result });
  console.log(num1);
  console.log(num2);
  console.log(result);
  const listNode = getNodeFromNum(result);
  // console.log(JSON.stringify(listNode));
  console.log(result.toString());
  return listNode;
};
addTwoNumbers(
  getNodeFromNum(1000000000000000000000000000001n),
  getNodeFromNum(465n)
)


module.exports = { getNodeFromNum, getNumFromListNode, addTwoNumbers };
