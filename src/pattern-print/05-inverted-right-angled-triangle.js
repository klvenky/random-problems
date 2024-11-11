/*
 Source: https://takeuforward.org/pattern/pattern-5-inverted-right-pyramid/
 For a given input N, print the pattern as below:
  Input: 5
  Output:
  * * * * *
  * * * *
  * * *
  * *
  *
 */

function printInvertedRightAngledPyramid(n) {
  let result = "";
  for (let row = 1; row < n + 1; row++) {
    result += "* ".repeat(n - row + 1) + "\n";
  }
  return result;
}

console.log(printInvertedRightAngledPyramid(5));
