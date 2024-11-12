/*
 Source: https://takeuforward.org/pattern/pattern-15-reverse-letter-triangle-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 A B C
 A B
 A
 
 Input Format: N = 6
 Result:   
 A B C D E F
 A B C D E 
 A B C D
 A B C
 A B
 A
 */

const ASCII_CODE_A = 65;
function printAlphaRamp(n) {
  for (let row = 1; row < n + 1; row++) {
    let lineText = "";
    for (let column = 1; column <= n + 1; column++)
      lineText +=
        n - column - row >= -1
          ? String.fromCharCode(ASCII_CODE_A + column - 1)
          : " ";
    console.log(lineText.trim());
  }
}

printAlphaRamp(6);
