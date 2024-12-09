// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
const { ArrayToListNode, ListNode } = require("./graph-utils/list-node");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.next = (next==undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function traverseAndDelete(head, map) {
  if (head == null || head.val == null) return head;
  else {
    const mapVal = map[head.val];
    if (mapVal == 1) {
      return new ListNode(head.val, traverseAndDelete(head.next, map));
    } else if (mapVal > 1) {
      return traverseAndDelete(head.next, map);
    }
  }
}

function traverse(head, map) {
  let node = head;
  while (node) {
    if (!map[node.val]) map[node.val] = 0;
    map[node.val] += 1;
    node = node.next;
  }
}

function deleteDuplicates(head) {
  const newMap = {};
  traverse(head, newMap);
  return traverseAndDelete(head, newMap);
}

const scenarios = [
  { input: [1, 2, 3, 3, 4, 4, 5], result: [1, 2, 5] },
  {
    input: [1, 1, 1, 2, 3],
    result: [2, 3],
  },
  { input: [0, 0, 0, 0, 3], result: [3] },
];

test("delete duplicates from sorted list-2", () => {
  for (const scenario of scenarios) {
    const input = ArrayToListNode(scenario.input);
    const expected = ArrayToListNode(scenario.result);
    const actual = deleteDuplicates(input);
    expect(actual).toEqual(expected);
  }
});
