// https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  const nodes = [];
  let curr = head;
  while (curr != null && curr.val != null) {
    nodes.push(curr.val);
    curr = curr.next;
  }
  // return nodes.join("") == nodes.reverse().join("");
  const max = nodes.length / 2 + 1;
  const total = nodes.length;
  for (let i = 0; i < max; i += 1) {
    if (nodes[i] !== nodes[total - i - 1]) return false;
  }
  return true;
}

const scenarios = [
  {
    input: {
      val: 1,
      next: { val: 2, next: { val: 2, next: { val: 1, next: null } } },
    },
    result: true,
  },
  {
    input: { val: 1, next: { val: 2, next: null } },
    result: false,
  },
];

test("isPalindrome", () => {
  for (const scenario of scenarios) {
    const actual = isPalindrome(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
