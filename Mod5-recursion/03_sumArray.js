//sum of all number in an array
// 1 way
// let arr = [5, 3, 2, 0, 1];
// function sum(n) {
//   if (n === 0) return arr[0];
//   return arr[n] + sum(n - 1);
// }
// console.log(sum(arr.length - 1));
//2nd way
// function sum(arr, i = 0) {
//   if (i === arr.length) return 0;
//   return arr[i] + sum(arr, i + 1);
// }
// console.log(sum([2, 3, 6, 9, 4]));
// Rule 1:
// If your recursion stops after adding the first element,
// ➡️ return arr[0].
// Because arr[0] must be included in the total sum.
// Rule 2:
// If your recursion stops after finishing the array,
// ➡️ return 0.
// Because 0 will not change the result.
// 👉 Backward recursion must return arr[0].
// 👉 Forward recursion must return 0.
// 👉 If the array is available globally, you only pass index.
// 👉 If the array is NOT global, you must pass array + index.
//3rd way using slice
// function sumArray(arr) {
//   if (arr.length === 0) return 0; // base case
//   return arr[0] + sumArray(arr.slice(1));
// }
// console.log(sumArray([10, 20, 30])); // Output: 60

//add only odd number in array
//1 way
// let arr = [5, 3, 2, 0, 1];
// function sum(n) {
//   isOdd = arr[n] % 2 !== 0;
//   if (n === 0) {
//     if (isOdd) {
//       return arr[n];
//     } else {
//       return 0;
//     }
//   }
//   if (isOdd) {
//     return arr[n] + sum(n - 1);
//   } else {
//     return 0 + sum(n - 1);
//   }
// }
// // console.log(sum(arr.length - 1));
//// same code using ternary operator better way
let arr = [5, 3, 2, 0, 1];
function sum(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sum(n - 1);
  //without bracket js reads like - return isOdd ? arr[n] : (0 + sum(n - 1));
}
console.log(sum(arr.length - 1));
/////mistake = return likhna bhool gye , (isOdd ? arr[n] : 0) bracket bhool gye
//2nd way
// function sum(arr, i = 0) {
//   if (i === arr.length) return 0;
//   if (arr[i] % 2 !== 0) {
//     return arr[i] + sum(arr, i + 1);
//   } else {
//     return sum(arr, i + 1);
//   }
// }
// console.log(sum([2, 3, 6, 9, 4]));
