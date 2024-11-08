const {
  addTwoNumbers,
  getNodeFromNum,
  getNumberStringFromNode,
  getNumFromListNode,
  parseStringToNode,
} = require("./num-string-parse");

test("get node from number", () => {
  expect(getNodeFromNum(0, true)).toEqual({ val: 0, next: null });
  expect(getNodeFromNum(1, true)).toEqual({ val: 1, next: null });
  expect(getNodeFromNum(123, true)).toEqual({
    val: 3,
    next: { val: 2, next: { val: 1, next: null } },
  });
  const out = getNodeFromNum(99, true);
  expect(out).toEqual({
    val: 9,
    next: { val: 9, next: null },
  });
  /* expect(getNodeFromNum(1000000000000000000000000000001n, true)).toEqual({
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
  }); */
});

test("get num from list node", () => {
  const inputs = [123n, 456n, 123456n];
  inputs.forEach((input) =>
    expect(getNumFromListNode(getNodeFromNum(input))).toEqual(input),
  );
});

test("add numbers in list", () => {
  expect(addTwoNumbers(getNodeFromNum(342n), getNodeFromNum(465n))).toEqual(
    getNodeFromNum(807n),
  );

  expect(
    addTwoNumbers(
      getNodeFromNum(1000000000000000000000000000001n),
      getNodeFromNum(465n),
    ),
  ).toEqual(getNodeFromNum(1000000000000000000000000000466n));
});

test("getNumberStringFromNode", () => {
  // expect(getNumberStringFromNode(getNodeFromNum(1000000000000000000000000000001n))).toEqual(123);
  expect(parseStringToNode("123"));
});
