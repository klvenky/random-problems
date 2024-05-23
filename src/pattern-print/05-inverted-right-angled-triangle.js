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
  for (let row = 1; row < n + 1; row++) {
    console.log("* ".repeat(n - row + 1));
  }
}

printInvertedRightAngledPyramid(5);
