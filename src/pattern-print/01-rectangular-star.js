/*
 Source: https://takeuforward.org/pattern/pattern-1-rectangular-star-pattern/
 For a given input N, print the pattern as below:
  Input: 5
  Output:
  * * * * *
  * * * * *
  * * * * *
  * * * * *
  * * * * *
 */

function printRectangularStar(n) {
  let result = "";
  for (let index = 1; index < n; index++) {
    result += "* ".repeat(n) + "\n";
  }
  return result;
}

console.log(printRectangularStar(5));
