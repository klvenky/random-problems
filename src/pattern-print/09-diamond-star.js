/*
 Source: https://takeuforward.org/pattern/pattern-9-diamond-star-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
   *  
  ***
 ***** 
 *****  
  ***
   *   
 Input Format: N = 6
 Result:   
      *
     ***
    ***** 
   *******
  *********
 ***********  
 ***********
  *********
   *******
    ***** 
     ***    
      *
 */

function printHalfPyramid(rows) {
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

function printInvertedHalfPyramid(rows) {
  const maxStars = 2 * rows - 1;
  for (let row = 1; row < rows + 1; row++) {
    let lineText = "";
    const rowStarsCount = maxStars - 2 * (row - 1);
    const paddingCount = ((maxStars - rowStarsCount) / 2).toFixed(0);
    lineText +=
      " ".repeat(paddingCount) +
      "*".repeat(rowStarsCount) +
      " ".repeat(paddingCount);
    console.log(lineText);
  }
}

function printDiamondStar(n) {
  printHalfPyramid(n);
  printInvertedHalfPyramid(n);
}

printDiamondStar(6);
