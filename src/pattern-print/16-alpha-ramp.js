/*
 Source: https://takeuforward.org/pattern/pattern-16-alpha-ramp-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 A
 B B
 C C C
 
 Input Format: N = 6
 Result:   
 A 
 B B
 C C C
 D D D D
 E E E E E
 F F F F F F
 */

const ASCII_CODE_A = 65;
function printAlphaRamp(n) {
  for (let row = 1; row < n + 1; row++) {
    let lineText = "";
    for (let column = 1; column <= row; column++)
      lineText += String.fromCharCode(ASCII_CODE_A + row - 1);
    console.log(lineText.trim());
  }
}

printAlphaRamp(5);
