// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(sentence) {
  const words = sentence
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter((w) => w.trim());
  return words[words.length - 1].length;
}
const scenarios = [
  {
    input: "Hello World",
    result: 5,
  },
  {
    input: "   fly me   to   the moon  ",
    result: 4,
  },
  {
    input: "luffy is still joyboy",
    result: 6,
  },
  { input: "AumsdgOVRB", result: 10 },
];

test("lengthOfLastWord", () => {
  for (const scenario of scenarios) {
    const actual = lengthOfLastWord(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
