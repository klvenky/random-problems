// https://leetcode.com/problems/add-two-numbers/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const sum = [];
  let node1 = l1,
    node2 = l2;
  let carry = 0;
  while (node1 || node2 || carry > 0) {
    const num1 = node1?.val ?? 0;
    const num2 = node2?.val ?? 0;
    const tmp = num1 + num2 + carry;

    if (tmp > 9) {
      sum.push(tmp % 10);
      carry = Math.floor(tmp / 10);
      // sum.push(tmp - 10);
      // carry = 1;
    } else {
      carry = 0;
      sum.push(tmp);
    }
    node1 = node1?.next ?? null;
    node2 = node2?.next ?? null;
    if (node1 == null && node2 == null && carry > 0) {
      sum.push(carry);
      carry = 0;
    }
  }
  return buildListNodeFromString(sum.reverse().join(""));
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

test("add two numbers iterative", () => {
  for (const scenario of scenarios) {
    const actual = addTwoNumbers(scenario.l1, scenario.l2);
    expect(actual).toEqual(scenario.result);
  }
});
