/*
 Source: https://takeuforward.org/pattern/pattern-7-star-pyramid/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
  *  
 *** 
*****   
 Input Format: N = 6
 Result:
     *     
    ***    
   *****   
  *******  
 ********* 
***********
 */

function printPyramid(rows) {
  const maxStars = 2 * rows - 1;
  for (let row = 1; row < rows + 1; row++) {
    let lineText = "";
    const rowStarsCount = 2 * (row - 1) + 1;
    const paddingLength = ((maxStars - rowStarsCount) / 2).toFixed(0);
    lineText +=
      " ".repeat(paddingLength) +
      "*".repeat(rowStarsCount) +
      " ".repeat(paddingLength);
    console.log(lineText);
  }
}

printPyramid(5);
