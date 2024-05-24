/*
Source: https://takeuforward.org/pattern/pattern-17-alpha-hill-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
   A  
  ABA 
 ABCBA
 
 
 Input Format: N = 6
 Result:   
      A     
     ABA    
    ABCBA   
   ABCDCBA  
  ABCDEDCBA 
 ABCDEFEDCBA
*/

function printAlphaHill(n) {
  const maxCols = 2 * n - 1;
  for (let row = 1; row < n + 1; row++) {
    let lineText = "";
    const blankTill = n - row;
    const blankAfter = n + row;
    for (let column = 1; column <= maxCols; column++) {
      if (column <= blankTill || column >= blankAfter) lineText += " ";
      else {
        if (column <= n) {
          lineText += String.fromCharCode(64 + column - n + row);
        } else {
          lineText += String.fromCharCode(64 + n - (column - row));
        }
      }
    }
    console.log(lineText);
  }
}

printAlphaHill(6);
