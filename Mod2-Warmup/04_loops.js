//////////////////////////////////////Program 2////////////////////////////////////////
// Write a function that searches for an element in an array and returns the index , if the elemnet is not present then just return -1
let arrCheck = [25, 8, 9, 10, 20, 5, 7];
let num; // no need to declare
function checkElement(arrCheck, num) {
  for (let i = 0; i < arrCheck.length; i++) {
    if (arrCheck[i] == num) {
      return i;
    }
  }
  return -1;
}
let value = checkElement(arrCheck, 25);
console.log("This value is present at index :- " + value);
///////////////////////////////////////////////////////
// summry and doubts
// mistake 1-  returned -1 inside the loop
// ans:On the very first element, if it’s not equal to num,the else runs and the function immediately returns -1  without checking the rest of the array.
///////////////////////////////////////////////////////////
//mistake 2 - if i pass the arr as a parameter i need to pass an argument as well and to show the value u need to store return value inside a variable
// if u not define global arr u also pass as an parameter like
// function checkElement(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(checkElement([25, 8, 9, 10, 20, 5, 7], 10));
///////////////////////////////////////////////////////////////
// another doubt - Why this works without passing arr:
// Because arr is defined outside the function —
// it is a global variable 🌍.

// When the function runs, JavaScript first looks inside the function for arr.
// If it doesn’t find it there, it automatically looks outside (in the global scope) and finds it.
////////////////////////////////////////////////////////////
// ✅ Better and cleaner way:

// Pass the array as a parameter instead:

// function checkElement(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       return i;
//     }
//   }
//   return -1;
// }

// let value = checkElement([25, 8, 9, 10, 20, 5, 7], 10);
// console.log(value);
// Now your function is independent and reusable —
// it can search any array, not just one specific global array.
////////////////////////////////////////////////////
// ques-if we not pass global variable and not pass arr as a parametr than ?
//ans- since arr is neither defined globally nor passed in, JavaScript has no idea what arr means. If not found anywhere → ❌ ReferenceError
// Option 1 – Pass it as a parameter (best way)
// Option 2 – Declare it globally (not preferred)
/////////////////////////////////////////////////////
// Using closures (advanced topic)
// You can make a function “remember” a variable defined outside it — even if not global.
// function createChecker() {
//   let arr = [25, 8, 9, 10];
//   function checkElement(num) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == num) return i;
//     }
//     return -1;
//   }
//   return checkElement;
// }

// const check = createChecker();
// console.log(check(9)); // 2
///////////////////////////////////////////////////////////
// Parameters → are like placeholders or variable names inside the function.
// Arguments → are the real values you pass to the function when you call it.

// function greet(name) {   // 👈 'name' is a parameter
//   console.log("Hello " + name);
// }

// greet("Anjali");         // 👈 "Anjali" is an argument
///////////////////////////////////////////////////////////
// ques-If I already pass num as a parameter in the function, do I still need to write let num outside?
//ans-No, you don’t need to write let num outside.That num you define as a parameter inside the function is already a local variable — created automatically when the function runs.
// ⚠️ Important point:

// If you define let num outside and also have a parameter num inside the function,
// the function parameter hides (overrides) the outer one while the function runs.

// Example:

// let num = 50;

// function test(num) {
//   console.log(num); // prints the value passed to the function, not 50
// }

// test(25); // prints 25

/////////////////////////////////////////Program 2///////////////////////////////////////////////////////////

// write a function that returns the number of negative numbers in an array

function countNegative(arr) {
  let count = 0;
  let negatives = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
      negatives += arr[i] + "  ";
    }
  }
  // return count;
  console.log(count);
  console.log(negatives);
}
countNegative([2, -1, 6, 9, -5, -8, 10, 11]);
// let negativenumber = countNegative([2, -1, 6, 9, -5, -8, 10, 11]);
// console.log("Total negative number in an array are " + negativenumber);

//////⚠️⚠️NOTE⚠️⚠️////////
// You wrote return count inside the loop, right after count++.That means as soon as the loop finds the first negative number,it returns immediately and stops checking the rest of the array.(same mistake again)
// this is correct but we can also do it using 'filter' in a shorter way

/////////////////////////////////////Program 3///////////////////////////////////////
//Write a function that return the largest number in an array
function findLargestNumber(arr) {
  // let current = -1;// it's bug
  //let current = -Infinity; //JavaScript is case-sensitive infinity to Infinity with capital I,otherwise gives ReferenceError: infinity is not defined
  let current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    //  let current = 0;//If i declare let current = 0; inside the loop, its scope is limited to the loop block {}
    // You wrote current = 0; inside the loop, → That resets current to 0 every time, so it can’t actually compare all elements
    if (arr[i] > current) {
      current = arr[i]; // use = bcz == is a comparison operator, not an assignment
      //return current; i used return current; inside the loop, That stops the loop immediately after the first comparison, so it never checks all numbers
    }
  }
  return current;
}
// let largestnumber = findLargestNumber([-2, -9, -70, -6, 0]);
// let largestnumber = findLargestNumber([-2, -9, -70, -6, 12, 19, 24]);
let largestnumber = findLargestNumber([2, 9, 70, 6, 100]);
console.log("Largest number of an array " + largestnumber);
/////////now this code is working fine for +ve integer but if ur arr have neg values it's not working fine when u intialize current to 0 or -1
// let largest = Math.max(...[2, 9, 70, 6, 100]);(short version)
// Infinity means a value larger than any number.
// -Infinity means a value smaller than any number.
// ✅ Best practice:
// If you’re sure the array is not empty, use: let current = arr[0];
// If the array might be empty or unknown, use: let current = -Infinity;
/////////////////////////////Home work Program///////////////////////////////////////
// Find the smallest number in an array
function findSmallestNumber(arr) {
  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  return small;
}
let smallNumber = findSmallestNumber([4, 9, 2, 6, 0]);
console.log(smallNumber);
// forget declare variable using let
//use Math.min() for shorter syntax
