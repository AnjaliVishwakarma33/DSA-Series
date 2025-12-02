// Merge Sorted Array
/////////////////////////LeetCode Program 88//////////////////////////////////////
/////////Get 100 beats where not take extra space to store
////////////////Case 1/////////////////
function mergeCase1(nums1, nums2, m, n) {
  let n1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    //till 5
    if (p2 >= n || (p1 < m && n1Copy[p1] < nums2[p2])) {
      nums1[i] = n1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}
let result1 = mergeCase1([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3);
console.log(result1);
//////////////////Case 2///////////////////
function mergeCase2(nums1, nums2, m, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (i = m + n - 1; i > 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}
let result2 = mergeCase2([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3);
console.log(result2);
// Note:- need to dry run Using pen paper
///////////////////////chatgpt ans///////////////////////////
function merge(nums1, m, nums2, n) {
  let i = m - 1; // pointer for nums1
  let j = n - 1; // pointer for nums2
  let k = m + n - 1; // pointer for final position

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // copy remaining elements from nums2
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return console.log(nums1);
}

// Example:
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// Output: [1,2,2,3,5,6]

/////////////////////////////////////////////////////////
// function merge(nums1, m, nums2, n) {
//     let i = m - 1; // Pointer for the last valid element in nums1
//     let j = n - 1; // Pointer for the last element in nums2
//     let k = m + n - 1; // Pointer for the last position in nums1

//     // Merge from the back to avoid overwriting values in nums1
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }

//     // If there are remaining elements in nums2, copy them
//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }
// }

// // Example usage:
// let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
// let nums2 = [2, 5, 6], n = 3;
// merge(nums1, m, nums2, n);
// console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
