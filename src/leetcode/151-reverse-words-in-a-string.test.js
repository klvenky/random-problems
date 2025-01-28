// https://leetcode.com/problems/reverse-words-in-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = [];
  let temp = "";
  for (let char of s) {
    if (char !== " ") {
      temp += char;
    } else {
      if (temp !== "") {
        words.push(temp);
        temp = "";
      }
    }
  }

  if (temp !== "") words.push(temp.trim());
  let result = "";
  for (let index = words.length - 1; index >= 0; index -= 1) {
    // console.log(index, " -> ", words[index]);
    result += words[index] + " ";
  }
  return result.trim();
};

const scenarios = [
  {
    input: "the sky is blue",
    result: "blue is sky the",
  },
  {
    input: "  hello world  ",
    result: "world hello",
  },
];

test("reverse words in a string", () => {
  for (const scenario of scenarios) {
    const actual = reverseWords(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
