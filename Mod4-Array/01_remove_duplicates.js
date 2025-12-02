// Array Series
// Remove Duplicates
// function removeDuplicates(arr) {
//   count = 0;
//   current = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1] || arr[i] != arr[i + 1]) {
//       current = arr[i];
//       count++;
//     }
//   }
//   return count;
// }

// let result = removeDuplicates([0, 0, 1, 1, 1, 3, 3, 4]);
// console.log(result);

///////////////////////////////LeetCode Program 26////////////////////////////////////////
// if u want to  modified array without using another array than u need two pinters , pointers like i and x both work same but for comparison we need this
function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  //   return console.log(x + 1, arr);
  return [x + 1, arr];
}
// let result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log(result);
let [newX, array] = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(newX); // prints 2
console.log(array); // prints [10, 20, 30]
