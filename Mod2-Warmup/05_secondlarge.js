//find second Largest number in an array

let arr = [4, 9, 0, 2, 8, 9, 7, 1];
// let arr = [9, 9, 9, 9, 9];
// let arr = [4];
function findSecondLargest() {
  if (arr.length < 2) {
    return null;
  }
  let largestnumber = -Infinity;
  let secondlargest = -Infinity; // didn’t initialize secondlargest — so at the start, it’s undefined.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestnumber) {
      secondlargest = largestnumber;
      largestnumber = arr[i];
    } else if (arr[i] > secondlargest && arr[i] != largestnumber) {
      // dry run is compulsory
      secondlargest = arr[i];
    }
  }
  // return secondlargest === -Infinity ? null : secondlargest;
  if (secondlargest === -Infinity) {
    return null;
  } else {
    return secondlargest;
  }
}

let result = findSecondLargest();
console.log(result);
////corner Cases
//- Array is empty
//- Array has negative numbers
//- Array has duplicates
//- Array has infinite number
// Answer-“In JavaScript, it’s not possible to create a truly infinite array, because arrays are stored in memory and memory is always limited.

// If we try to create an infinite array or loop through one without a stopping condition, the program will either crash or hang.

// But we can simulate an infinite sequence using a generator function or an iterator, which produces elements one by one when needed — this is called lazy evaluation.

// So, if I ever need to work with an infinite sequence, I would use a generator instead of an array.”
//- one more case : let arr = [10, 20, Infinity, 15];
// JavaScript supports special numeric values:Infinity,-Infinity
// If you don’t handle this carefully, your logic might treat Infinity as always the largest.

//////⚠️⚠️NOTE⚠️⚠️////////
// Do I need to initialize variables with Infinity (or -Infinity) because arr[0] can’t handle this?(why infinite)
// Because -Infinity is smaller than every real number (and even smaller than Infinity).So this is the best and safest approach.
// Problem:
// If arr[0] itself is Infinity, then your loop starts with largest = Infinity.
// Now, the loop will never update largest, because nothing is greater than Infinity.

//////////need to revise again and again
