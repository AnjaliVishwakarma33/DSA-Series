// functions and if-else

// function printHelloWorld() {
//   console.log("hello World");
// }
// printHelloWorld();

// function greet(name) {
//   console.log("hello World", name);
// }
// let x = "Virat Kohli";
// greet(x);

// function add(a, b) {
//   let sum = a + b;
//   let mul = a * b;
//   console.log(sum);
//   console.log(mul);
// }
// add(2, 7);

// function square(x) {
//   let result = x * x;
//   return result;
// }

// let value = square(2);
// console.log(value);

// WAP create a function which accepts the age and tells whether a person is elegible to vote or not

// function voteEligibility(age) {
//   if (age < 0) {
//     console.log("Not Valid");
//   } else if (age < 18) {
//     console.log("Not Eligible");
//   } else {
//     console.log("Eligible");
//   }
// }
// voteEligibility(-1);
// voteEligibility(10);
// voteEligibility(18);
// voteEligibility(20);

// WAP check the number is even or odd

// function checkNumber(num) {
//   if (num == 0) {
//     console.log("0 also consider as even");
//   } else if (num % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }
// checkNumber(0);// this program need to optimize and modified
function isEvenOdd(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
isEvenOdd(0);
isEvenOdd(2);
isEvenOdd(7);
