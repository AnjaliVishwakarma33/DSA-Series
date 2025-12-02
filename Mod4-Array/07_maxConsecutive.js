// Max Consecutive
////////////////////////Leetcode maxrogram 485///////////////////////////////////
/////////////////My logic get 96 beats////////////////////////
function maxConsecutive(nums) {
  let count = 0;
  let max = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      max = count; /////unnessary
      count = 0;
    }
    if (max < count) {
      max = count;
    }
  }
  return max;
}
let result = maxConsecutive([1, 1, 0, 1, 1, 1, 0, 1]);
console.log(result);
/////////////////////2nd logic by akshay////////////////////////////////
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return Math.max(max, count); ////find max
};
/////////////another way//////////////////////
function maxConsecutive(nums) {
  let count = 0;
  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      p = Math.max(p, count); // keep track of the max streak
    } else {
      count = 0; // reset when 0 found
    }
  }

  return p;
}
///////////////////best approach////////////////////////
function findMaxConsecutiveOnes(nums) {
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;
    max = Math.max(max, count);
  }
  return max;
}
