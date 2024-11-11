function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function ListNodeToArray(node) {
  let temp = node;
  const list = [];
  while (temp?.val) {
    list.push(temp.val);
    temp = temp.next;
  }
  return list;
}

function ArrayToListNode(input) {
  const [first, ...rest] = input;
  const next = rest.length > 0 ? ArrayToListNode(rest) : null;
  const node = new ListNode(first, next);
  return node;
}

module.exports = { ListNode, ListNodeToArray, ArrayToListNode };
