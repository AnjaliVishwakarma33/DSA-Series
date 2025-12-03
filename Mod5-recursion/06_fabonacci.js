//Fibonacci Number
////////////////LeetCode Program 509/////////////////
function fibonacci(n) {
  if (n <= 1) return n; //means n=1 or n=0 1 h to 1 return krega 0 h toh 0
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(9));
// Time complexity: O(2ⁿ) (exponential)
// Space complexity: O(n) (due to call stack)
// How to print full Fibonacci series
function printFibonacci(n) {
  let a = 0,
    b = 1;
  console.log(a); // first number
  if (n > 1) console.log(b); // second number
  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
printFibonacci(10);
// Iterative (Best in coding rounds):
function fib(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// 3️⃣ Iterative → O(n) time, O(1) space
// Why space is O(1)?
// Because we use only three variables
// a, b, c
// We do NOT store the whole array.
// Why iterative is preferred?- No recursion,No call stack,O(1) space,Fast
//////////////////////////////
// "Who decided this formula?"
// The Fibonacci sequence was introduced by Leonardo Fibonacci, a mathematician.
// He observed a pattern in rabbit population growth:
// Rabbits of month "n" = rabbits of month "n-1" + rabbits of month "n-2"`
// So the formula came naturally from this pattern.
// 👉 The formula is not created randomly.
// It was created to describe how something grows based on two previous states.
////////////////////////////////////////////////////////
// ⭐ What happens if base case is wrong?
// If base cases are wrong:
// Every further Fibonacci value becomes wrong.
// Your recursion tree becomes wrong.
////////////////////////////////////////////////////////
// ⭐ (A) Explain Fibonacci in one simple line
// “Fibonacci is a sequence where each number is the sum of the previous two numbers, starting from 0 and 1.”
// ⭐ (B) Explain recursion Fibonacci clearly
// “Recursive Fibonacci works by breaking the problem into two smaller subproblems: fib(n−1) and fib(n−2).
// It creates a recursion tree and recalculates many values, so it becomes exponential.”
// ⭐ (C) Explain why recursion is slow
// “Because it recalculates the same values again and again.
// For example, fib(5) calculates fib(3) twice.
// This leads to O(2ⁿ) time complexity.”
// ⭐ (D) Explain memoization simply
// “Memoization stores results of previous Fibonacci calls so we don’t compute them again.
// This reduces time complexity from exponential O(2ⁿ) to linear O(n).”
// ⭐ (E) Explain tabulation (DP) simply
// “In tabulation, I build an array from 0 to n and fill Fibonacci values bottom-up.
// It avoids recursion and is also O(n).”
// ⭐ (F) Explain iterative Fibonacci quickly
// “Iterative Fibonacci uses two variables to store only the last two results.
// It is the most efficient: O(n) time and O(1) space.”
// ⭐ (G) Explain series printing
// “To print the series, I keep updating three variables: a, b, and c, and print each value in every loop.”
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// Hoisting confusion using function
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
function hello() {
  console.log("Hi!");
  //   return "Bye!";
}
console.log(hello());
hello();
// ⭐ Summary
// ✅ 1. The function hello is hoisted
// This means:
// JavaScript knows the function exists before running the code.
// You can call hello() anywhere.
// 👉 The function is NOT undefined.
// ❗ 2. But the RETURN VALUE of hello() is undefined
// Because the function has no return statement:
// function hello() {
//   console.log("Hi!");
// }
// So when you do:
// console.log(hello());
// TWO things happen:
// hello() prints "Hi!"
// Since it does NOT return anything → it returns undefined
// Then console.log() prints that undefined
// ⭐ Final Output
// Hi!
// undefined
// ✔ Hoisting = makes function available
// ✔ Undefined = returned because there is no return value
// These two are different things.
// function fib(n) {
//   let a = 0,
//     b = 1;
//   console.log(a);
//   console.log(b);

//   for (let i = 2; i < n; i++) {
//     let c = a + b;
//     console.log(c); // PRINT
//     a = b;
//     b = c;
//   }
// }
// fib(4);
// console.log(fib(4));
