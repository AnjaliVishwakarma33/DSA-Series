// Loop within a Loop
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("i= " + i + " " + "j= " + j);
//   }
// }
// for (let i = 0; i < 5; i++) {
//   // for (let j = 0; j < i; j++) {
//   for (let j = 0; j <= i; j++) {
//     console.log("i= " + i + " " + "j= " + j);
//   }
// }
// for (let i = 0; i < 5; i++) {
//   // for (let j = i; j > 0; j--) {
//   for (let j = i; j >= 0; j--) {
//     console.log("i= " + i + " " + "j= " + j);
//   }
// }
for (let i = 3; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    // for (let j = 0; j <= i; j++) {
    console.log("i= " + i + " " + "j= " + j);
  }
}
