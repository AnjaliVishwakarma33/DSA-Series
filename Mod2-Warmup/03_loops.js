// about Loops Part 1
// "use strict";
// for loop
//When you want to perform a repeated task, you need a loop

// if u want to print hello world 10 times than?

// for (let i = 0; i < 10; i++) {
// for (let i = 0; i <=4; i++) {
// for (let i = 2; i < 10; i = i + 2) {//2 4 6 8 output
// for (let i = 0; i <= 11; i = i + 1) {
// for (let i = 5; i > 0; i = i - 1) {
for (let i = 5; i < 4; i++) {
  // nothing print
  // for (let i = 1; i > 0; i++) {// this one is infinite loop
  console.log("SitaRam " + i);
}

// function inside a loop

function greet(i) {
  console.log("hello " + i);
}
for (let i = 0; i < 5; i++) {
  // with let i It works because JavaScript is lenient(not strict or forgiving)
  greet(i);
}
// simple example of global variable
// let name = "Anjali"; // global variable

// function greet() {
//   console.log("Hello " + name); // can use it here too
// }

// greet();       // prints "Hello Anjali"
// console.log(name); // also works here
// ✅ name is global, so both inside and outside the function can use it.
// If you have another part of your code that also uses name, it could accidentally overwrite it.
// local variable example
// function test() {
//   let city = "Jhansi"; // local variable
//   console.log(city);
// }

// test();
// console.log(city); // ❌ error — city is not defined

// arr using loops

let arr = [2, 5, 8, 10, 15, 6, 17, 0];
// let length = arr.length;
// for (let i = 0; i < length; i++) {
for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 == 0) {//even
  if (arr[i] % 2 == 1) {
    //odd
    console.log("Array elements -:" + arr[i]);
  }
}

// while loop
let i = 0;
while (i < 5) {
  console.log("hello world " + i);
  i++;
}
