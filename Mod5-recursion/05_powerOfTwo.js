// power of two using recursion
//////////////////LeetCode Problem 231//////////////////////
function power(n) {
  if (n == 1) return true;
  else if (n % 2 !== 0 || n < 1) return false;
  return power(n / 2);
}
console.log(power(55));
