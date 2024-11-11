// https://leetcode.com/problems/longest-common-prefix/
const { performance } = require("node:perf_hooks");
const { tableTestRunner } = require("../../table-tests-helpers");
const { logTiming } = require("../../helpers/utils.js");

/**
 * Generates all possible substrings of a given text.
 *
 * @param {string} text - The input string from which substrings are generated.
 * @param { startOnly: boolean, returnArray: boolean } - options to customize output
 * @returns {Set<string>} A set containing all possible substrings of the input text.
 */
function getSubStrings(text, opts) {
  const { startOnly = false, returnArray = false } = opts || {};
  const set = new Set();
  if (!startOnly) {
    text
      .split("")
      .filter((t) => t)
      .forEach((char) => set.add(char));
    for (let index = 0; index < text.length; index += 1) {
      for (let ssi = index; ssi < text.length; ssi += 1) {
        const ss = text.substring(index, ssi + 1);
        if (ss && ss !== "") set.add(ss);
      }
    }
  } else {
    set.add(text[0]);
    for (let ssi = 0; ssi < text.length; ssi += 1) {
      const ss = text.substring(0, ssi + 1);
      if (ss && ss !== "") set.add(ss);
    }
  }

  if (returnArray) return Array.from(set);
  else return set;
}

exports.longestCommonPrefix = longestCommonPrefix;

function longestCommonPrefix(list) {
  const startTime = performance.now();
  const subStringSets = list.map((listItem) =>
    getSubStrings(listItem, { startOnly: true }),
  );

  const { timestamp: subStringsGeneratedBy, seconds } = logTiming(startTime);
  // console.log(`substrinGenDuration: ${seconds} seconds`);

  let lcp = "";
  for (let index = 0; index < subStringSets.length; index += 1) {
    const l1Start = performance.now();
    const set = subStringSets[index];
    const setValues = Array.from(set).sort((a, b) =>
      a.length > b.length ? -1 : 1,
    );
    let matchCount = 0;
    let match;
    for (let si = 0; si < setValues.length; si += 1) {
      const subString = setValues[si];
      let skip = false;
      const startL3 = performance.now();
      for (let msi = 0; msi < subStringSets.length; msi += 1) {
        const has = subStringSets[msi].has(subString);
        if (has) matchCount += 1;
        else {
          skip = true;
          break;
        }
      }
      // const { timestamp: endL3, seconds } = logTiming(startL3);
      // console.log(`l3 - ${si} - took ${seconds} seconds`);
      if (skip) {
        skip = false;
        matchCount = 0;
        continue;
      } else if (matchCount === subStringSets.length) {
        match = subString;
        if ((match?.length || 0) > lcp.length) {
          lcp = match;
          matchCount = 0;
        }
      }
    }
    // const { timestamp, seconds } = logTiming(l1Start);
    // console.log(`loop 1 - ${index} took ${seconds} seconds`);
  }
  return lcp;
}

// longestCommonPrefix([
//   "flower",
//   "flow",
//   "flight",
//   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
// ]);

tableTestRunner(
  longestCommonPrefix,
  [
    [["flower", "flow", "flight"]],
    [["dog", "racecar", "car"]],
    [["reflower", "flow", "flight"]],
  ],
  ["fl", "", ""],
);
