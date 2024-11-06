const { isPalindrome } = require(".");

test("is palindrome", () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(-121)).toEqual(false);
});
