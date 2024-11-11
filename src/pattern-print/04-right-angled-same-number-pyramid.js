/*
 Source: https://takeuforward.org/pattern/pattern-3-right-angled-number-pyramid/
 For a given input N, print the pattern as below:
  Input: 5
  Output:
  1
  2 2
  3 3 3
  4 4 4 4
  5 5 5 5 5
 */

function printRightAngledSameNumberPyramid(n) {
  let result = "";
  for (let row = 1; row < n + 1; row++) {
    result += `${row} `.repeat(row);
  }
  return result;
}

console.log(printRightAngledSameNumberPyramid(5));
