// https://leetcode.com/problems/add-two-numbers/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addSingleNode(node, carry) {
  if (carry == 0) return node2;
  else {
    const sum = node.val + carry;
    const q = Math.floor(sum / 10),
      r = sum % 10;
    if (r > 0) {
      return new ListNode(q, addTwoNumbers(null, node.next, r));
    } else return new ListNode(node.val + carry, node.next);
  }
}

function addTwoNumbers(node1, node2, carry = 0) {
  if (!node1 && !node2) {
    if (carry == 0) {
      return null;
    } else {
      return new ListNode(carry, null);
    }
  }

  const v1 = node1?.val ?? 0,
    v2 = node2?.val ?? 0;
  const sum = v1 + v2 + carry;
  // const q = Math.floor(sum / 10),
  //   r = sum % 10;
  let r = sum,
    q = 0;
  if (sum > 9) {
    // since sum can be a 18 at max, just sum-10 will give reminder & carry will always be 1.
    r = sum - 10;
    q = 1;
  }

  return new ListNode(
    r,
    addTwoNumbers(node1?.next ?? null, node2?.next ?? null, q),
  );
}

function buildListNodeFromString(numStr) {
  const numsLen = numStr.length;
  if (numsLen > 0) {
    const val = numStr.charAt(numStr.length - 1);
    const next = numStr.substring(0, numsLen - 1);
    // console.log(`val: ${val}, next -> '${next}'`);
    return new ListNode(
      parseInt(val),
      next.length > 0 ? buildListNodeFromString(next) : null,
    );
  }
  return null;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const scenarios = [
  {
    l1: { val: 2, next: { val: 4, next: { val: 3, next: null } } },
    l2: { val: 5, next: { val: 6, next: { val: 4, next: null } } },
    result: buildListNodeFromString("807"),
  },
  {
    l1: { val: 0, next: null },
    l2: { val: 0, next: null },
    result: buildListNodeFromString("0"),
  },
  {
    l1: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: { val: 9, next: { val: 9, next: { val: 9, next: null } } },
          },
        },
      },
    },
    l2: {
      val: 9,
      next: { val: 9, next: { val: 9, next: { val: 9, next: null } } },
    },
    result: buildListNodeFromString("10009998"),
  },
  {
    l1: {
      val: 1,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 0,
                                next: {
                                  val: 0,
                                  next: {
                                    val: 0,
                                    next: {
                                      val: 0,
                                      next: {
                                        val: 0,
                                        next: {
                                          val: 0,
                                          next: {
                                            val: 0,
                                            next: {
                                              val: 0,
                                              next: {
                                                val: 0,
                                                next: {
                                                  val: 0,
                                                  next: {
                                                    val: 0,
                                                    next: {
                                                      val: 0,
                                                      next: {
                                                        val: 0,
                                                        next: {
                                                          val: 0,
                                                          next: {
                                                            val: 0,
                                                            next: {
                                                              val: 0,
                                                              next: {
                                                                val: 0,
                                                                next: {
                                                                  val: 1,
                                                                  next: null,
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    l2: { val: 5, next: { val: 6, next: { val: 4, next: null } } },
    result: buildListNodeFromString("1000000000000000000000000000466"),
  },
];

test("add two numbers recursive", () => {
  for (const scenario of scenarios) {
    const actual = addTwoNumbers(scenario.l1, scenario.l2);
    // console.log(JSON.stringify({ actual, expected: scenario.result }));
    expect(actual).toEqual(scenario.result);
  }
});
