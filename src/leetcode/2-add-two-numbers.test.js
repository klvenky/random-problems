// https://leetcode.com/problems/add-two-numbers/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const num1 = getNumberFromNode(l1);
  const num2 = getNumberFromNode(l2);
  return buildListNodeFromNum(num1 + num2);
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function buildListNodeFromNum(num) {
  const rem = num % 10;
  const q = Math.floor(num / 10);
  return new ListNode(rem, q !== 0 ? buildListNodeFromNum(q) : null);
}

function getNumberFromNode(node) {
  let tmp = node;
  const nums = [];
  while (tmp) {
    nums.push(tmp.val);
    tmp = tmp.next;
  }
  return parseInt(nums.reverse().join(""), 10);
}

const scenarios = [
  {
    l1: { val: 2, next: { val: 4, next: { val: 3, next: null } } },
    l2: { val: 5, next: { val: 6, next: { val: 4, next: null } } },
    result: { val: 7, next: { val: 0, next: { val: 8, next: null } } },
  },
  {
    l1: { val: 0, next: null },
    l2: { val: 0, next: null },
    result: { val: 0, next: null },
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
    result: {
      val: 8,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 0,
              next: { val: 0, next: { val: 0, next: { val: 1, next: null } } },
            },
          },
        },
      },
    },
  },
  // {
  //
  //     l1: {
  //       val: 1,
  //       next: {
  //         val: 0,
  //         next: {
  //           val: 0,
  //           next: {
  //             val: 0,
  //             next: {
  //               val: 0,
  //               next: {
  //                 val: 0,
  //                 next: {
  //                   val: 0,
  //                   next: {
  //                     val: 0,
  //                     next: {
  //                       val: 0,
  //                       next: {
  //                         val: 0,
  //                         next: {
  //                           val: 0,
  //                           next: {
  //                             val: 0,
  //                             next: {
  //                               val: 0,
  //                               next: {
  //                                 val: 0,
  //                                 next: {
  //                                   val: 0,
  //                                   next: {
  //                                     val: 0,
  //                                     next: {
  //                                       val: 0,
  //                                       next: {
  //                                         val: 0,
  //                                         next: {
  //                                           val: 0,
  //                                           next: {
  //                                             val: 0,
  //                                             next: {
  //                                               val: 0,
  //                                               next: {
  //                                                 val: 0,
  //                                                 next: {
  //                                                   val: 0,
  //                                                   next: {
  //                                                     val: 0,
  //                                                     next: {
  //                                                       val: 0,
  //                                                       next: {
  //                                                         val: 0,
  //                                                         next: {
  //                                                           val: 0,
  //                                                           next: {
  //                                                             val: 0,
  //                                                             next: {
  //                                                               val: 0,
  //                                                               next: {
  //                                                                 val: 0,
  //                                                                 next: {
  //                                                                   val: 1,
  //                                                                   next: null,
  //                                                                 },
  //                                                               },
  //                                                             },
  //                                                           },
  //                                                         },
  //                                                       },
  //                                                     },
  //                                                   },
  //                                                 },
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                       },
  //                                     },
  //                                   },
  //                                 },
  //                               },
  //                             },
  //                           },
  //                         },
  //                       },
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //     l2: { val: 5, next: { val: 6, next: { val: 4, next: null } } },
  //   result: {},
  // },
];

test("addTwoNumbers", () => {
  for (const scenario of scenarios) {
    const actual = addTwoNumbers(scenario.l1, scenario.l2);
    expect(actual).toEqual(scenario.result);
  }
});
