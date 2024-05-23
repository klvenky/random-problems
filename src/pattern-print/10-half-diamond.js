/*
 Source: https://takeuforward.org/pattern/pattern-10-half-diamond-star-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
   *  
   **
   ***  
   **
   *   
 Input Format: N = 6
 Result:   
      *
      **
      *** 
      ****
      *****
      ******  
      *****
      ****
      ***    
      **
      *
 */
function printHalfPyramid(rows) {
  for (let row = 1; row < rows + 1; row++) {
    let lineText = "";
    const rowStarsCount = row;
    const paddingLength = rows - rowStarsCount;
    lineText += "*".repeat(rowStarsCount) + " ".repeat(paddingLength);
    console.log(lineText);
  }
}

function printInvertedHalfPyramid(rows) {
  for (let row = 1; row < rows + 1; row++) {
    let lineText = "";
    const rowStarsCount = rows - row + 1;
    const paddingCount = rows - rowStarsCount;
    lineText += "*".repeat(rowStarsCount) + " ".repeat(paddingCount);
    console.log(lineText);
  }
}

function printDiamondStar(n) {
  printHalfPyramid(n);
  printInvertedHalfPyramid(n);
}

printDiamondStar(6);
