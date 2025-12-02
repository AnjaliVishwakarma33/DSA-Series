// Move Zeros
///////////////////////////LeetCode Program 283/////////////////////////////////////
////////this one gets 54 beats
function moveZeroes(arr) {
  let p = 0;
  for (i = 0; i < arr.length; i++) {
    // if (arr[i] > arr[p]) {
    if (arr[i] != 0) {
      let temp = arr[p];
      arr[p] = arr[i];
      arr[i] = temp;
      //////////2nd way////////////////
      //  if (i !== p) {     // ✅ Only swap when needed
      //           [nums[p], nums[i]] = [nums[i], nums[p]];
      //       }
      // [a, b] = [b, a] is a modern, easy way to swap.
      p++;
    }
  }
  return console.log(arr);
}
// moveZeroes([1, 0, 1]);
////////////////////another way by akshay saini///////////////////////////////
//////////this one gets 100% beats
function moveZeroes(nums) {
  let x = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return console.log(nums);
}
moveZeroes([0, 1, 0, 2, 3]);
//bcz  if there are  only 0's at the end than 1st example goes lengthy
///Corner case ///
// [0, 1, 0];
// [1, 2, 3, 4];
// [0, 0, 0, 0];
// [0, 1, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
