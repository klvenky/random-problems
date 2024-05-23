/*
 Source: https://takeuforward.org/pattern/pattern-6-inverted-numbered-right-pyramid/
 For a given input N, print the pattern as below:
  Input: 5
  Output:
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
 */

function printInvertedRightAngledAllNumberPyramid(n) {
  for (let row = 1; row < n + 1; row++) {
    let lineText = "";
    for (let column = n - row + 1; column > 0; column--)
      lineText += column + " ";
    console.log(lineText.trim());
  }
}

printInvertedRightAngledAllNumberPyramid(5);
