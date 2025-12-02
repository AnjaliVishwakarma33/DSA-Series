///////////////////////////////Leetcode Program 346//////////////////////////////////
//////////100 beats//////////
function revrseString(s) {
  let len = s.length - 1;
  let n = s.length / 2;
  for (let i = 0; i < n; i++) {
    let temp = s[i];
    s[i] = s[len - i];
    s[len - i] = temp;
  }
  return s;
}
let result = revrseString(["a", "n", "j", "a", "l", "i"]);
console.log(result);
/////////////////////another solution/////////////////////
function revrseString2(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
}
let value = revrseString2(["a", "n", "j", "a", "l", "i"]);
console.log(value);
