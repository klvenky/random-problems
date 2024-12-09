// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  let result = -1;

  const regexp = new RegExp(needle, "ig");
  if (haystack.match(regexp)) {
    for (let i = 0; i < haystack.length - needle.length + 1; i += 1) {
      const substr = haystack.substring(i, i + needle.length);
      if (substr == needle) {
        result = i;
        break;
      }
    }
  }
  return result;
}

test("tests", () => {
  expect(strStr("sadbutsad", "sad")).toEqual(0);
  expect(strStr("leetcode", "leeto")).toEqual(-1);
  expect(strStr("hello", "ll")).toEqual(2);
  expect(strStr("a", "a")).toEqual(0);
  expect(strStr("abc", "c")).toEqual(2);
});
