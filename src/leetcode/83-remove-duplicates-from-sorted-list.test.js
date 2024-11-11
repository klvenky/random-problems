//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
const { ArrayToListNode, ListNode } = require("./list-node");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head, map = undefined) {
  if (!map) map = new Map();

  if (head !== null && head.val !== null) {
    if (!map.has(head?.val)) {
      map.set(head.val, true);
      return new ListNode(head.val, deleteDuplicates(head.next, map));
    } else {
      if (head.next) {
        return deleteDuplicates(head.next, map);
      } else {
        return null;
      }
    }
  }
  return null;
}

const scenarios = [
  { input: [1, 1, 2], result: [1, 2] },
  {
    input: [1, 1, 2, 3, 3],
    result: [1, 2, 3],
  },
  {
    input: [0, 0, 0, 0],
    result: [0],
  },
];

test("delete duplicates", () => {
  for (const scenario of scenarios) {
    const input = ArrayToListNode(scenario.input);
    const expected = ArrayToListNode(scenario.result);
    const actual = deleteDuplicates(input);
    expect(actual).toEqual(expected);
  }
});
