// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
const { ArrayToListNode, ListNode } = require("./list-node");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function makeUnique(head, countMap) {
  if (head !== null && head.val !== null) {
    let mapVal =
      head !== null && head.val !== null ? countMap[head.val] ?? 0 : 0;
    if (!countMap[head?.val]) {
      countMap[head.val] = mapVal + 1;
      return new ListNode(head.val, makeUnique(head.next, countMap));
    } else {
      countMap[head?.val] = mapVal + 1;
      if (head.next) {
        return makeUnique(head.next, countMap);
      } else {
        return null;
      }
    }
  }
  return null;
}

function traverseAndDelete(head, map) {
  if (head === null || head.val === null) return null;
  else {
    const mapVal = map[head.val];
    if (mapVal === 1) {
      return new ListNode(head.val, traverseAndDelete(head.next, map));
    } else if (mapVal > 1) {
      return traverseAndDelete(head.next, map);
    }
  }
}

function deleteDuplicates(head) {
  const countMap = {};
  const unique = makeUnique(head, countMap);
  console.log(JSON.stringify({ unique, countMap }));
  return traverseAndDelete(unique, countMap);
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
    console.log(JSON.stringify({ expected, actual }));
    expect(actual).toEqual(expected);
  }
});
