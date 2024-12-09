// Source: https://leetcode.com/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.next = (next==undefined ? null : next)
 * }
 */

const getNodeFromNum = (input, firstRun = false) => {
  const remainder = input % 10;
  const quotient = Math.floor(input / 10);
  let output;
  if (input == 0 && firstRun) {
    output = { val: 0, next: null };
  } else if (remainder >= 0 && quotient > 0) {
    output = {
      val: remainder,
      next: getNodeFromNum(Math.floor(input / 10)),
    };
  } else {
    output = { val: remainder, next: null };
  }
  return output;
};

const getNumFromListNode = (node, value = 0, exponent = 0) => {
  const newVal = node.val * 10 ** exponent + value;
  if (node.next) {
    return getNumFromListNode(node.next, newVal, exponent + 1);
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
  const num1 = getNumFromListNode(l1, 0);
  const num2 = getNumFromListNode(l2, 0);
  const result = num1 + num2;

  const listNode = getNodeFromNum(result);
  return listNode;
};

module.exports = { addTwoNumbers, getNodeFromNum, getNumFromListNode };
