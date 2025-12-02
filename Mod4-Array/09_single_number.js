//Single Number
///////////////////////////Leetcode 136//////////////////////////////////
//////////read about xor and hash table
// using hashtable
function singleNumber(arr) {
  let hash = {}; // work like a frequency map
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  // Start: hash = {} (empty object)
  // Iteration 1 (i = 0, arr[i] = 2):
  // hash[2] is undefined → !hash[2] is true
  // Execute hash[2] = 1
  // hash becomes { "2": 1 } (object keys are strings)
  // Iteration 2 (i = 1, arr[i] = 2):
  // Now hash[2] is 1 → !hash[2] is false
  // Execute hash[2]++ → increments from 1 to 2
  // hash becomes { "2": 2 }
  // Iteration 3 (i = 2, arr[i] = 1):
  // hash[1] is undefined → !hash[1] is true
  // Execute hash[1] = 1
  // Final hash is { "2": 2, "1": 1 }
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == 1) {
      return arr[i];
    }
  }
}
// let result = singleNumber([4, 1, 2, 1, 2]);
let result = singleNumber([2, 2, 1]);
console.log(result);
// need to understand this hashtable concept
// using xor
/////100% beats
// function singleNumber(arr) {
//   let xor = 0;
//   for (let i = 0; i < arr.length; i++) {
//     xor = xor ^ arr[i];
//   }
//   return xor;
// }
// // let result = singleNumber([2, 2, 1]);
// let result = singleNumber([4, 1, 2, 1, 2]);
// console.log(result);
////////////////incomplete code/////////////////
// function singleNumber(arr) {
//   current = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== current) {
//       current = arr[i];
//     }
//   }
//   return current;
// }
// let result = singleNumber([4, 1, 2, 1, 2]);
// // let result = singleNumber([2, 2, 1]);
// console.log(result);
//////////////////////////////////////////////////////////////
//hash table code issue not understand try it in future
// Important subtle issues / gotchas
// Falsy keys or values
// The test !hash[arr[i]] relies on falsy/truthy logic. If hash[arr[i]] ever becomes a falsy number like 0 (not the case here because we set to 1), the test would incorrectly treat it as “not present.”
// More relevant: if array values are strings like "" (empty string) and you used that as a key, the key is still " " and hash[""] behaves normally — but the falsy test is on the count, not the key.
// Prototype property collisions
// Plain objects inherit properties from Object.prototype. If arr contains strings like "toString" or "hasOwnProperty", hash["toString"] is not undefined initially (it's a function), so !hash["toString"] will be false and the code will incorrectly go to the else branch and try to increment a function → NaN.
// Fixes:
// Use Object.create(null) to make a truly empty object: let hash = Object.create(null);
// Or use a Map which avoids that whole problem: const map = new Map();
// Non-primitive values as keys
// If arr contains objects (e.g. {x:1}), using them as keys with a plain object forces them to be stringified to "[object Object]" — collisions will happen.
// Use Map for object keys: map.set(obj, (map.get(obj) || 0) + 1)
// Type coercion of keys
// Object keys are strings. hash[2] is stored under "2". That usually is fine, but be aware of the coercion.
// Incrementing something that’s not a number
// If hash[arr[i]] is not a numeric value (see prototype collision example) hash[arr[i]]++ can produce NaN.
