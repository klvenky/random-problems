/*
 Source: https://takeuforward.org/pattern/pattern-13-increasing-number-triangle-pattern/
 For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 1
 2 3
 4 5 6
 
 Input Format: N = 6
 Result:   
 1
 2  3
 4  5  6
 7  8  9  10
 11  12  13  14  15
 16  17  18  19  20  21
*/

function printIncreasingNumberTriangle(rows) {
  let number = 1;
  for (let row = 1; row < rows + 1; row++) {
    for (let column = 1; column <= row; column++) {
      process.stdout.write(number + " ");
      number++;
    }
    process.stdout.write("\n");
  }
}

printIncreasingNumberTriangle(6);
