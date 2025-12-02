// Remove elements from an array which is equal to val
/////////////////////////////Leetcode Program 27/////////////////////////////////
function removeElements(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}
let result = removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(result);
