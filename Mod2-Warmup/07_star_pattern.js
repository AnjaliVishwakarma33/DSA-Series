// Star pattern

// ****
// ****
// ****
// ****
/////////////////Program 1////////////////////
// let n = 4;
// for (i = 0; i < n; i++) {
//   //for row
//   let row = "";
//   for (j = 0; j < n; j++) {
//     //for column
//     row = row + "*";
//   }
//   console.log(row);
// }
/////////////////Program 2////////////////////
// *
// **
// ***
// ****
// let n = 5;
// for (i = 0; i < n; i++) {
//   let row = "";
//   for (j = 0; j < i; j++) {
//     //only 4 star in last row
//     //  for (j = 0; j < i + 1; j++) {//5 star in last row or use <=
//     row = row + "*";
//   }
//   console.log(row);
// }
/////////////////Program 3////////////////////
// 1
// 12
// 123
// 1234
// 12345
// let n = 5;
// for (i = 0; i < n; i++) {
//   let row = "";
//   //   for (j = 1; j <= i + 1; j++) {//me
//   for (j = 0; j <= i; j++) {
//     // row = row + j;//me
//     row = row + (j + 1);
//   }
//   console.log(row);
// }
/////////////////Program 4////////////////////
// 1
// 22
// 333
// 4444
// 55555
// let n = 5;
// for (i = 0; i <= n; i++) {
//   let row = "";
//   for (j = 1; j <= i; j++) {
//     row = row + (i);
//   }
//   console.log(row);
// }
/////////////////Program 5////////////////////
// 12345
// 1234
// 123
// 12
// 1
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - 1; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }
/////////////////Program 6////////////////////
// *****
// ****
// ***
// **
// *
// let n = 5;
// for (i = 0; i < n; i++) {
//   let row = "";
//   for (j = 1; j <= n - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
/////////////////Program 7////////////////////
//     *
//    **
//   ***
//  ****
// *****
// let n = 5;
// for (i = 0; i < n; i++) {
//   let row = "";
//   //adding space
//   for (j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   //adding stars
//   for (k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
/////////////////Program 7 and Program 8 ////////////////////
// 1
// 10
// 101
// 1010
// 10101

let n = 5;
let toggle = 1; // if i used here toggle is not refresh again and again so every new row start from 1
for (let i = 0; i < n; i++) {
  let row = "";
  // let toggle = 1;
  for (let j = 0; j < i; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
/////////suggestion need to go through star patterns again
/////////////summry
// Why this is bad

// The inner loop mutates the same counter the outer loop uses. So when the inner loop finishes, the outer loop’s counter is left at some value you didn’t expect.
// That makes the number of outer iterations unpredictable (often fewer than expected), or in other arrangements it could even cause infinite loops.

// Rules of thumb / best practices

// Use different variable names for nested loops (commonly i, j, k).
// Prefer let over var — let gives block scope and avoids many accidental clashes.
// If you want to re-use the same identifier, you must declare a new let inside the inner block (shadowing) — but using distinct names is clearer.
// For simple patterns where the inner loop does the same work each row, consider building one row once (like '*'.repeat(n)) and reusing it — that avoids nested counters entirely.
