//Missing Number
/////////////////////LeetCode Program 268/////////////////////////
///////100 beats
function missingNumber(arr) {
  let n = arr.length;
  let sum = 0;
  let total = (n * (n + 1)) / 2;
  //   let num = 0;
  for (let i = 0; i < n; i++) {
    // arraysum = arraysum + arr[i];
    sum += arr[i];
  }
  //   if (total > arraysum) {
  //     num = total - arraysum;
  //   }
  //   return num;
  return total - sum;
}
let result = missingNumber([1, 5, 3, 2, 9, 8, 7, 6]);
console.log(result);
//////////////////////////////////////////////////////////////////
//if array not start from 0 than 2 way to get total
///////1 way using includes
function missingNumber(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  let total;

  // check if array starts from 0 or 1
  if (arr[0] === 0 || arr.includes(0)) {
    total = (n * (n + 1)) / 2; // case 0...n
  } else {
    total = ((n + 1) * (n + 2)) / 2; // case 1...n+1
  }

  return total - sum;
}

// console.log(missingNumber([0, 7, 4, 6, 2, 3, 1])); // Output: 5
// console.log(missingNumber([1, 2, 3, 5])); // Output: 4

//////2nd way without includes
function missingNumber(arr) {
  let n = arr.length;
  let sum = 0;
  let hasZero = false;

  // find total sum and check if 0 is present
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (arr[i] === 0) {
      hasZero = true;
    }
  }

  // if numbers start from 0
  let total;
  if (hasZero) {
    total = (n * (n + 1)) / 2;
  }
  // if numbers start from 1
  else {
    total = ((n + 1) * (n + 2)) / 2;
  }

  return total - sum;
}

// console.log(missingNumber([0, 7, 4, 6, 2, 3, 1])); // Output: 5
// console.log(missingNumber([1, 2, 3, 5])); // Output: 4

/////////////////////////////////////////
///incomplete logic try to complete in future////////
// function missingNumber(arr) {
// //   let val = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] !== arr[i + 1] - 1) {
//   //       val = i;
//   //     }
//   //   }
//   return arr;
// }
// let result = missingNumber([0, 2, 4, 1]);
// console.log(result);
