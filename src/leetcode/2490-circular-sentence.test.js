// https://leetcode.com/problems/circular-sentence/
/**
 * @param {string} sentence
 * @return {boolean}
 */
// var isCircularSentence = function(sentence) {
//   console.log(JSON.stringify(sentence));
//   };

function isCircularSentence(inputs) {
  const words = inputs.split(" ");
  const lastWord = words[words.length - 1];
  const firstWord = words[0];
  if (firstWord[0] != lastWord[lastWord.length - 1]) {
    return false;
  } else {
    for (let wi = 0; wi < words.length - 1; wi += 1) {
      const current = words[wi];
      const nextW = words[wi + 1];
      if (current[current.length - 1] !== nextW[0]) {
        return false;
      }
    }
  }
  return true;
}

const scenarios = [
  {
    input: "leetcode exercises sound delightful",
    result: true,
  },
  {
    input: "eetcode",
    result: true,
  },
  {
    input: "Leetcode is cool",
    result: false,
  },
];

test("is circular sentence", () => {
  for (const scenario of scenarios) {
    const actual = isCircularSentence(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
