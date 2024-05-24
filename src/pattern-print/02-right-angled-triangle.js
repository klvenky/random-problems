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
  for (let row = 0; row < n; row++) {
    console.log("* ".repeat(row + 1));
  }
}

printIncreasingNumberTriangle(5);
