//write a function to print number fron n to 1 using recursion
// 1 way
// function print(num) {
//   if (num == 0) return 0;
//   // console.log(num);
//   num = num - 1;
//   print(num);
// }
// let n = 15;
// print(n);
// 2nd way
// function print(n) {
//   if (n < 0) return;
// With n == 0:
// Stops only when n = 0
// With n < 1:
// Stops when n = 0
// Stops when n = -1
// Stops when n = -5
// (Extra safety)
// if (n == 0) return;
// n = –5
// –5 == 0 → false
// This becomes infinite recursion (keeps going –5, –6, –7, –8, …)
//   console.log(n);
//   print(--n);
// }
// print(-5);
// print(10);
////////////////about "return"
// return means “stop the function here and go back.”
// Without return, the function will keep calling itself forever
// return; → stops the function
// return value; → stops the function and gives something back so we can store it and use it later.
// return;
// Stops the function immediately.
// return 0;
// Also stops the function, but returns the value 0.
//write a function to print number fron 1 to n using recursion
let n = 5;
function print(x) {
  if (x > n) return;
  console.log(x);
  print(++x);
}
print(1);
// ✔ Both work
// print(++x)
// print(x++)
// ✔ Why?
// Because in this recursion, the updated value is passed forward correctly anyway.
// ✔ Recommended for clarity:
// Use ++x because it is easier to read in recursion.
////////when u not pass parameter inside function
// Your code: works because you pass num again, and each time it becomes smaller (5 → 4 → 3 → 2 → 1 → stop).
// ❓ What happens if you call func() again without passing num?
// Example:
// func(num); // correct
// But if you write:
// func();   // ❌ no argument passed
// Then inside the function:
// 🔹 num becomes undefined
// So the check:
// if (num == 0) return;
// undefined == 0 is false, so it does NOT stop.
// Then:
// num = num - 1;
// ➡️ undefined - 1 becomes NaN (Not a Number)
// Then it calls:
// func(num); // now num = NaN
// Next time again:
// if (num == 0) return; // NaN == 0 → false
// So it never stops.
// This becomes an infinite recursion until the stack overflows.
// ✔️ Why infinite loop happens?
// Because:
// undefined or NaN never becomes 0
// So the stop condition num == 0 never becomes true
// Function keeps calling itself forever
// ✔️ How to prevent this?
// Always pass the parameter:
// func(num);
// Or add a safer condition:
// if (!num) return;
//////////////////////////////////////////
// This stops if num is:
// 0
// undefined
// null
// NaN
// Summary (very simple)
// Passing num → recursion works correctly
// Not passing num → becomes undefined → never becomes 0 → infinite recursion
// if (!num) means "stop when num is 0 or invalid".
// ❗ “If num is falsy, then stop.”
// In JavaScript, these values are considered falsy:
// 0
// undefined//undedined =false so !undefined = true ; opposite value
// null
// NaN
// "" (empty string)
// false
////////////////////////
