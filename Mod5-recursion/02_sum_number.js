// Sum of first n number
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(5));

////calculation////
// sum(1) = 1 + 0 = 1
// sum(2) = 2 + 1 = 3
// sum(3) = 3 + 3 = 6
// sum(4) = 4 + 6 = 10

// ✔ Why return n + sum(n-1)?
// Because recursion must send the final result upward to the previous function call.
// Without returning the result, you will get:
// undefined + n → NaN
///////////////////////////
// ✅ Why does print() work without return values going upward?
// Because printing does not depend on going upward.
// It depends on going downward.
// Let me show you clearly.
// ⭐ Recursion has 2 directions
// 1️⃣ Going DOWN (calling itself)
// print(5)
// → print(4)
// → print(3)
// → print(2)
// → print(1)
// → print(0) → stop
// 2️⃣ Going UP (returning back)
// return
// return
// return
// return
// ✔ When printing numbers, ONLY the downward direction is needed.
// Because:
// You print as soon as the function is called, before returning.
// 🎯 Look at the code:
// function print(n) {
//   if (n == 0) return;   // stop
//   console.log(n);       // print NOW
//   print(n - 1);         // go down
// }
// print(5);
// Execution happens like this:
// print(5) → prints 5
// print(4) → prints 4
// print(3) → prints 3
// print(2) → prints 2
// print(1) → prints 1
// print(0) → stops
// NO upward values are needed!
// ❗ Important:
// Printing happens when the function is called (going down)
// NOT when the function returns (going up)
// This is why no return value is required in print().
// 🧠 Simple Analogy
// Imagine a staircase:
// You shout a number at each step down (print).
// At the bottom step, you stop (return).
// Going back up, you don’t need to shout anything.
// You still shouted 5 → 4 → 3 → 2 → 1 correctly.
// No upward shouting needed.
// 🔥 Now compare with sum()
// For sum():
// You need to add values going UPWARD.
// That is why “sum” must return values upward.
// For print:
// You only need to print going DOWNWARD.
// That is why print does not need return values.
// ⭐ Final Simple Answer
// print() prints while going down — so upward return values are NOT needed.
// sum() calculates while going up — so return values ARE needed.
