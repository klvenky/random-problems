/*
 Source: https://takeuforward.org/pattern/pattern-2-right-angled-triangle-pattern/
 For a given input N, print the pattern as below:
  Input: 5
  Output:
  *
  * *
  * * *
  * * * *
  * * * * *
 */

function printIncreasingNumberTriangle(n) {
  let result = "";
  for (let row = 0; row < n; row++) {
    result += "* ".repeat(row + 1) + "\n";
  }
  return result;
}

console.log(printIncreasingNumberTriangle(5));
