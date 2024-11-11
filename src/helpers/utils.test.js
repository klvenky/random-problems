const { getSubStrings } = require("./utils");

test("get sub strings", () => {
  expect(getSubStrings("a", { returnArray: true })).toEqual(["a"]);
  expect(getSubStrings("ab", { returnArray: true })).toEqual(["a", "b", "ab"]);
  expect(getSubStrings("abc", { returnArray: true })).toEqual([
    "a",
    "b",
    "c",
    "ab",
    "abc",
    "bc",
  ]);
});
