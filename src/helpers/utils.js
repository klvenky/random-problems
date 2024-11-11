const { performance } = require("node:perf_hooks");

const logMap = new Map();

function getLogKey(func, param1) {
  return `${func.name}-${typeof param1 === "string" ? param1 : JSON.stringify(param1)}`;
}

exports.logger = logger;
function logger(key, log) {
  if (!logMap[key]) logMap[key] = [];
  logMap[key].push(log);
}

exports.printLogs = printLogs;
function printLogs(key) {
  if (process.env.NODE_DEBUG === "true") {
    console.log((logMap[key] ?? []).join("\n"));
  }
}

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
exports.getSubStrings = getSubStrings;
exports.logTiming = logTiming;

function logTiming(start) {
  const timestamp = performance.now();
  return { timestamp, seconds: ((timestamp - start) / 1000).toFixed(5) };
}
