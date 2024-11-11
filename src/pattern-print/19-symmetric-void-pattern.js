/* 
Source:https://takeuforward.org/pattern/pattern-19-symmetric-void-pattern/
For a given input N, print the pattern as below:
 Input Format: N = 3
 Result: 
 ******
 **  **
 *    *
 *    *
 **  **
 ******
 
 Input Format: N = 6
 Result:   
 ************
 *****  *****
 ****    ****
 ***      ***
 **        **
 *          *
 *          *
 **        **
 ***      ***
 ****    ****
 *****  *****
 ************
*/

function printSymmetricVoid(n) {
  const min = 1;
  const maxItems = 2 * n;
  let result = "";
  const isFirstOrLast = (row, column) =>
    column === min || row === min || column === maxItems || row === maxItems;
  const isUpperLeftTriangle = (row, column) => row >= column && row < n;
  const isUpperRightTriangle = (row, column) =>
    row > n && column > n && maxItems - column <= row;
  const isLowerLeftTriangle = (row, column) => false;
  const isLowerRightTriangle = (row, column) => false;
  for (let row = min; row < maxItems + 1; row += 1) {
    for (let column = min; column < maxItems + 1; column += 1) {
      let step = 0;
      let current = " ";
      if (
        isFirstOrLast(row, column) ||
        isLowerLeftTriangle(row, column) ||
        isUpperLeftTriangle(row, column) ||
        isUpperRightTriangle(row, column) ||
        isLowerRightTriangle(row, column)
      ) {
        // first or last row/column should have a *
        step = 1;
        current = "*";
      } /* else if (column < n && row < n && n - row <= column) {
        step = 2;
        current = "*";
      } else if (column > n && n + row <= column) {
        step = 3;
        current = "*";
      } else if (row > n && n + column <= row) {
        step = 4;
        current = "*";
      } else if (column > n && n + row <= column) {
        step = 5;
        current = "*";
      }  */ else {
        step = 7;
        current = " ";
      }

      // if (
      //   isFirstOrLast(row, column) ||
      //   (column <= n && row + column < maxItems && row < column) || // Upper left triangle
      //   (column >= n && row + column > maxItems && row > column) || // Lower right triangle
      //   (row <= n && row + column < maxItems && row > column) || // Lower left triangle
      //   (row >= n && row + column > maxItems && row < column)
      // ) {
      //   // Upper right triangle
      //   result += "*";
      // } else {
      //   result += " ";
      // }

      if (row === maxItems - 1) console.log({ row, column, current, step });
      result += current;
    }
    result += "\n";
  }
  return result;
}

// function printSymmetricVoidPattern(N) {
//   // Upper half of the pattern
//   let result = "";
//   for (let i = 0; i < N; i++) {
//     // Print stars for the left side
//     for (let j = 0; j < N - i; j++) {
//       result += "*";
//     }
//     // Print spaces in the middle
//     for (let k = 0; k < 2 * i; k++) {
//       result += " ";
//     }
//     // Print stars for the right side
//     for (let j = 0; j < N - i; j++) {
//       result += "*";
//     }
//     result += "\n"; // Move to the next line
//   }

//   // Lower half of the pattern (mirror image of the upper half)
//   for (let i = N - 1; i >= 0; i--) {
//     // Print stars for the left side
//     for (let j = 0; j < N - i; j++) {
//       result += "*";
//     }
//     // Print spaces in the middle
//     for (let k = 0; k < 2 * i; k++) {
//       result += " ";
//     }
//     // Print stars for the right side
//     for (let j = 0; j < N - i; j++) {
//       result += "*";
//     }
//     result += "\n"; // Move to the next line
//   }
//   return result;
// }

// console.log(printSymmetricVoidPattern(6));
console.log(printSymmetricVoid(3));
