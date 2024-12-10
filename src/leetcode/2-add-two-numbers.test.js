// https://leetcode.com/problems/add-two-numbers/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const num1 = getNumberStrFromNode(l1);
  const num2 = getNumberStrFromNode(l2);

  const maxDigits = num1.length > num2.length ? num1.length : num2.length;
  let nums1 = prefixZeroesUntil(num1, maxDigits),
    nums2 = prefixZeroesUntil(num2, maxDigits);

  const sum = new Array(maxDigits);
  let carry = 0;
  for (let i = maxDigits - 1; i >= 0; i -= 1) {
    const tmp = carry + parseInt(nums1[i]) + parseInt(nums2[i]);
    if (tmp > 9) {
      sum[i] = tmp % 10;
      carry = Math.floor(tmp / 10);
    } else {
      carry = 0;
      sum[i] = tmp;
    }
  }

  if (carry > 0) {
    sum.unshift(carry);
  }
  const result = sum.join("");

  console.log(`${nums1} + ${nums2} = ${result}`);
  const node = buildListNodeFromString(result);
  return node;
}

function prefixZeroesUntil(str, max) {
  if (max > str.length) {
    return `${new Array(max - str.length).fill(0).join("")}${str}`;
  }
  return str;
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

function getNumberStrFromNode(node) {
  let tmp = node;
  const nums = [];
  while (tmp) {
    nums.push(tmp.val);
    tmp = tmp.next;
  }
  return nums.reverse().join("");
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

test("addTwoNumbers", () => {
  for (const scenario of scenarios) {
    const actual = addTwoNumbers(scenario.l1, scenario.l2);
    expect(actual).toEqual(scenario.result);
  }
});
