// Palindrome
// eg-121,1223221
let n = 10;
function palindrome(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
let result = palindrome(n);
if (n === result) {
  console.log(
    "Number is Palindrome                  " +
      " Number is :" +
      n +
      " && Result is :" +
      result
  );
} else {
  console.log(
    "Not a palindrome" + " Number is :" + n + " && Result is :" + result
  );
}
console.log(result);
// summry for this code
// Here’s the key point 👇
// The function gets a copy of n (numbers are passed by value).
// So even though inside the function n becomes 0,
// the outer n (the one outside) stays unchanged (10).
// still works correctly, because the outer n keeps its original value.
// 🧠 So do you need original here?
// ➡️ No, in your current version, you don’t need to define original.
// Because you’re already passing n from outside,
// and comparing using that same unchanged outer value.
// u reverse number inside function and compare inside function - need original variable
///////if u do not pass a argument
// Here, you are using the same variable n inside and outside the function — and since n is global, the function directly modifies it.
// That changes the original n (the one declared outside).
// So when the function ends, n becomes 0.
// Now after the function:
// result = 1
// n = 0 (⚠️ changed!)
// if (n === result) → 0 === 1 → false
// | Problem                                    | Fix                                  |
// | ------------------------------------------ | ------------------------------------ |
// | You didn’t pass argument to `palindrome()` | Pass `n` like `palindrome(n)`        |
// | Function runs but gives wrong result       | Fixed after passing correct argument |
///////////////here u pass n both side inside function as well as comparison
// You passed n as an argument to the function.
// Inside the function, a local copy of n is created — it doesn’t affect the outer n.
// So:
// The n inside the function changes (because of n = Math.floor(n / 10)).
// The n outside the function (the global one) stays 10.
// So yes — even though n is used in both places, they don’t interfere with each other because the function parameter n is scoped locally inside the function.
////////Here’s why we sometimes use num inside and n outside 👇
// It’s just about clarity and good practice — not a rule.
// using num (or any other name) inside the function is a clean coding habit — it improves readability and avoids confusion, even though technically both ways work fine.
//////////////////////LeetCode////////////////////////////
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   let original = x;
//   let rev = 0;
//   while (x > 0) {
//     let rem = x % 10;
//     rev = 10 * rev + rem;
//     x = Math.floor(x / 10);
//   }
//   return original === rev;//The result of this comparison is always a boolean → either true or false.
// };

// console.log(isPalindrome(10));
////////////////////Summry////////////////////
///////Doubts
/////////////////////////////////////////////////////////////
// 1. what need to take another variable to store original Number
//this part confuses many learners at first.
// 🧩 Why do we need original?
// Because inside the while loop, you’re changing x step by step — dividing it by 10 each time.After the loop ends, x becomes 0.So, if you don’t store the original value before the loop starts, you’ll lose it — and then you can’t compare it with the reversed number.
//That’s a very smart question 👏 — and it shows you’re really understanding JavaScript deeply.
// 2. why after while loop x is 0 inside while okay but why out side while
// 🔍 Why x is 0 even outside the loop:
// Because in JavaScript, variables declared with let inside the same function belong to the function scope, not just the loop.
// That means:The same variable x is used inside and outside the loop.You are changing x inside the loop each time (x = Math.floor(x / 10)).When the loop ends, x keeps its last modified value, which is 0.
// 🧠 Important:
// while doesn’t create a new scope in JavaScript (unlike {} inside a function or a block with its own let declarations).So the variable x is shared:
// ✅ If you want to keep both (original and changing one) separate:
// You can copy x into another variable before the loop:
///////////////////////////////////////////////
// 3. what is issue in this code
// let rev = 0;
// while (x > 0) {
//   let rem = x % 10;
//   rev = (10 * rev) + rem;
//   x = Math.floor(x / 10);
// }
// return rev; // ❌ Problem here
// if (x === rev) {
//   return true;
// } else {
//   return false;
// }
//Answer-🧠 Issue explanation
// You have return rev; before the if (x === rev) check.That means the function returns early right there, and the next lines never run (the comparison never happens).So the function just returns the reversed number — not a boolean (true or false).
// ✅ Corrected version:
// You need to store the original number before modifying x, and then compare at the end:
////////////////////////////////////////////////////
