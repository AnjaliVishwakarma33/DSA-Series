// Count digit
//Write a function that returns the count of digits in a number

function countDigit(num) {
  //   let count = 0;

  //   if (num != 0) {
  //     for (let i = 0; i > 0; i++) {
  //       //use while instead of for
  //       count = num / 10;
  //     }
  //   }
  //   return count;
  num = Math.abs(num); //math absolute provide negative to positive and positive to positive
  let count = 0;
  if (num == 0) {
    return 1;
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    //math.floor ex-:10.23=10,23.6=23
    // num = Math.round(num / 10);
    //math.round eg-:10.5=11,24.2=24
    // Math.ceil eg:- 12.1=13;10.5=11
    // Math.abs eg :- -123=123,-78=78
    count++;
  }
  return count;
}
// let result = countDigit(12345);
// result = countDigit(0);
// result = countDigit(1);
result = countDigit(-2345);
console.log(result);
