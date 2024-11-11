/* 
Source: https://takeuforward.org/pattern/pattern-18-alpha-triangle-pattern/
For a given input N, print the pattern as below:
Input Format: N = 3
 Result: 
 C
 B C
 A B C
 
 Input Format: N = 6
 Result:   
 F
 E F
 D E F
 C D E F
 B C D E F
 A B C D E F
*/

function printAlphaTriangle(n) {
  let result = "";
  for (let row = 1; row < n + 1; row++) {
    for (let column = 1; column < row + 1; column++) {
      result += String.fromCharCode(64 + n - row + column);
    }
    result += "\n";
  }
  console.log(result);
}

printAlphaTriangle(6);
