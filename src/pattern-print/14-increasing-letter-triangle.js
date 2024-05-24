/*
 Source: https://takeuforward.org/pattern/pattern-14-increasing-letter-triangle-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 A
 A B
 A B C
 
 Input Format: N = 6
 Result:   
 A
 A B
 A B C
 A B C D
 A B C D E
 A B C D E F
 */

const ASCII_CODE_A = 65;
function printAlphaRamp(n) {
  for (let row = 1; row < n + 1; row++) {
    let lineText = "";
    for (let column = 1; column <= row; column++)
      lineText += String.fromCharCode(ASCII_CODE_A + column - 1);
    console.log(lineText.trim());
  }
}

printAlphaRamp(5);
