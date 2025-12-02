//Reverse Integer
function reverseInteger(n) {
  nCopy = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  // | Hex          | Decimal      | Binary (32-bit)                       |
  // | ------------ | ------------ | ------------------------------------- |
  // | `0x7FFFFFFF` | `2147483647` | `01111111 11111111 11111111 11111111` |

  //   if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
  //     return 0;
  //   }
  //   if (rev > 0x7fffffff) return 0; // bitwise check, faster
  if (rev > 2 ** 31 - 1) return 0;
  return nCopy < 0 ? -rev : rev;
}
console.log(reverseInteger(34567));
// ternary operator
//  : -else
//condition ? do this : this;
