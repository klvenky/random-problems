// https://leetcode.com/problems/rotate-string
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateString(s, goal) {
  if (s == goal) return true;
  if (s.length == goal.length) {
    function rotate(word) {
      return word.substring(1) + word[0];
    }

    let tmp = s;
    for (let index = 0; index < s.length; index += 1) {
      tmp = rotate(tmp);
      if (tmp == goal) return true;
    }
  }
  return false;
}

function quick(s, goal) {
  if (s.length != goal.length) return false;
  return (s + s).includes(goal);
}

const scenarios = [
  {
    s: "abcde",
    goal: "cdeab",
    result: true,
  },
  {
    s: "abcde",
    goal: "abced",
    result: false,
  },
];

test("rotate string", () => {
  for (const scenario of scenarios) {
    const actual = rotateString(scenario.s, scenario.goal);
    expect(actual).toEqual(scenario.result);
  }
});
