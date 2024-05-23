/*
 Source: https://takeuforward.org/pattern/pattern-12-number-crown-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 1    1
 12  21
 123321
 
 Input Format: N = 6
 Result:   
 1          1
 12        21
 12       321
 1234    4321
 12345  54321
 123456654321
 */

function printNumberCrown(rows) {
  for (let row = 1; row < rows + 1; row++) {
    let lineText = "";
    for (let column = 1; column < rows + 1; column++) {
      lineText += row - column >= 0 ? column : " ";
    }
    for (let column = rows; column > 0; column--) {
      lineText += row - column >= 0 ? column : " ";
    }
    console.log(lineText);
  }
}

printNumberCrown(6);
