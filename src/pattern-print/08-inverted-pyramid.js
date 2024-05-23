/*
 Source: https://takeuforward.org/pattern/pattern-8-inverted-star-pyramid/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 *****  
  ***
   *   
 Input Format: N = 6
 Result:     
 ***********
  *********
   *******
    ***** 
     ***    
      *
 */

function printInvertedPyramid(rows) {
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

printInvertedPyramid(6);
