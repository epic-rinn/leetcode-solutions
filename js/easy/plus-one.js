/**
 * Idea:
 * - Treat the array as a big integer and simulate adding 1 starting from the last digit.
 * - Propagate carry backward as long as needed.
 * - If the most significant digit also produces a carry (e.g., 999 → 1000),
 *   prepend the carry to the array.
 *
 * Algorithm:
 * 1. Initialize `carry = 1` since we are adding one.
 * 2. Loop from the last digit toward the first while `carry` is still 1:
 *      a. Compute `total = digits[i] + carry`.
 *      b. Update digits[i] = total % 10    (new digit after addition).
 *      c. Update carry = Math.floor(total / 10).
 * 3. After the loop, if `carry` is still 1, insert it at the front of the array.
 * 4. Return the updated digits array.
 *
 * Time Complexity: O(n)
 *    - In the worst case (e.g., 9999…) every digit must be updated.
 *
 * Space Complexity: O(1)
 *    - Reuses the input array; only constant extra variables are used.
 */

var plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0 && carry == 1; i--) {
    let total = digits[i] + carry;
    digits[i] = total % 10;
    carry = total / 10;
  }

  if (carry === 1) digits.unshift(carry);

  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9, 9, 9]));
