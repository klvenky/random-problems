/*
 Source: https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/
 For a given input N, print the pattern as below:
  Input: 5
  Output:
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
 */

function printRightAngledSameNumberPyramid(n) {
  for (let row = 1; row < n + 1; row++) {
    let lineText = "";
    for (let column = 1; column <= row; column++) lineText += column + " ";
    console.log(lineText.trim());
  }
}

printRightAngledSameNumberPyramid(5);
