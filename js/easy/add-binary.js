/**
 * Idea:
 * - Add the two binary strings from right to left while tracking a carry.
 * - Treat missing digits in the shorter string as 0.
 * - Prepend each computed bit to build the final result.
 *
 * Algorithm:
 * 1. Make sure `a` is the longer string.
 * 2. Loop from the end of `a`:
 *      - Compute x = a[i] + (b[j] or 0) + carry.
 *      - Insert x % 2 at the front of result.
 *      - Update carry = Math.floor(x / 2).
 * 3. After loop, prepend carry if it's 1.
 * 4. Return the joined result string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var addBinary = function (a, b) {
  let carry = 0;
  let sum = [];

  if (a.length < b.length) {
    [a, b] = [b, a];
  }

  let j = b.length - 1;

  for (let i = a.length - 1; i >= 0; i--) {
    let x = Number(a[i]) + Number(b[j--] ?? 0) + carry;
    sum.unshift(x % 2);
    carry = Math.floor(x / 2);
  }

  if (carry == 1) {
    sum.unshift(1);
  }

  return sum.join("");
};

// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));
console.log(addBinary("100", "110010"));
