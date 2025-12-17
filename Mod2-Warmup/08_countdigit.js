// Count digit
//Write a function that returns the count of digits in a number

//  function countDigits(num) {
//   let count = 0;

//   for (; num !== 0; num = Math.floor(num / 10)) {
//     count++;
//   }

//   return count;
// }
// console.log(countDigits(12345)); // 5
////////////// Using string (also for loop)///////////////
// function countDigits(num) {
//   let count = 0;
//   let str = num.toString();

//   for (let i = 0; i < str.length; i++) {
//     count++;
//   }

//   return count;
// }

// console.log(countDigits(7098)); // 4
//////////////////////////////////////////
function countDigit(num) {
  num = Math.abs(num); //math absolute provide negative to positive and positive to positive
  let count = 0;
  if (num == 0) {
    return 1;
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    //math.floor ex-:10.23=10,23.6=23
    //num = Math.round(num / 10);
    //math.round eg-:10.5=11,24.2=24
    //Math.ceil eg:- 12.1=13;10.5=11
    //Math.abs eg :- -123=123,-78=78
    count++;
  }
  return count;
}
// let result = countDigit(12345);
// result = countDigit(0);
// result = countDigit(1);
result = countDigit(-2345);
console.log(result);

// My loop logic divides the number by 10, which works only for integers.
// For decimal numbers, it removes the entire value in one step, so only the integer part is counted.
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;

  while (!Number.isInteger(num)) {
    num = num * 10;
  }

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigits(9.78)); // ❌ may give wrong result sometimes
// use this fot count decimal as well but the problem is
// 0.1 * 10 = 0.9999999999
// Floating-point error → infinite loop risk ❌
// JavaScript has floating-point problems:
// 0.1 * 10       // 0.9999999999999999 ❌
// Fix using toFixed:
// num = Number((0.1 * 10).toFixed(10)); // 1 ✅
// ✅ Best & Accepted Answer (INTERVIEW)
// function countDigits(num) {
//   return Math.abs(num).toString().replace(".", "").length;
// }
// What to say in interview 🧠
// JavaScript uses floating-point numbers, so math-only digit counting for decimals is unreliable.
// Converting to string is the safest and most accurate approach.
