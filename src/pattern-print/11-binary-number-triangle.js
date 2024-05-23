/*
 Source: https://takeuforward.org/pattern/pattern-11-binary-number-triangle-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 1
 01
 101
 
 Input Format: N = 6
 Result:   
 1
 01
 101
 0101
 10101
 010101
 */

function printRightAngledNumberPyramid(rows) {
  for (let row = 1; row < rows + 1; row++) {
    let lineText = "";
    for (let column = 1; column < row + 1; column++) {
      lineText += (column - row) % 2 == 0 ? 1 : 0;
    }
    console.log(lineText);
  }
}

printRightAngledNumberPyramid(6);
