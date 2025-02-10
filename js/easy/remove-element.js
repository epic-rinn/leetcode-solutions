/**
 * Idea:
 * - Use two pointers to remove all occurrences of `val` in-place.
 * - `j` scans every element.
 * - `i` tracks the position to write valid (non-removed) elements.
 * - When nums[j] != val, copy nums[j] into nums[i] and advance i.
 * - After the loop, the first `i` elements form the cleaned array.
 *
 * Algorithm:
 * 1. Initialize i = 0.
 * 2. Loop j from 0 → end:
 *      • If nums[j] != val:
 *            nums[i] = nums[j]
 *            i++
 * 3. Return i as the new valid length.
 *
 * Time:  O(n)
 * Space: O(1)
 */

var removeElement = function (nums, val) {
  let i = 0; // slow pointer
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i++] = nums[j];
    }
  }

  return i;
};

console.log(removeElement([3, 2, 2, 3], 3) == 2);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) == 5);
