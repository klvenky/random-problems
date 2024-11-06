// Source: https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} input
 * @return {boolean}
 */
function isPalindrome(input) {
  let reversed = 0;
  let next = input;
  if (input < 0) return false;
  while (next > 0) {
    reversed = reversed * 10 + (next % 10);
    next = Math.floor(next / 10);
  }

  return reversed === input;
}

module.exports = {
  isPalindrome,
};
