// Best time to Buy and sell
////////////////////////////Leetcode Program 121/////////////////////////////////
function profit(arr) {
  let min = arr[0];
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] - min > max) {
      max = arr[i] - min;
    }
  }
  return max;
}
let result = profit([7, 1, 5, 0, 6, 4]);
console.log(result);
// hume ek hi loop mai saare task krne hote h
//loop ke bhr max 0 nhi hoga update hokr max value mil jaayegi line no. 11 se age mx nhi mila to 0 milegi
