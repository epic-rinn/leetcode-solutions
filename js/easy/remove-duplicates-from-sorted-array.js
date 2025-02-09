/**
 * Idea:
 * - Use two pointers on the sorted array:
 *      • `i` tracks the position of the last unique element.
 *      • `j` scans through the array looking for new unique values.
 * - When nums[j] differs from nums[i], place it at nums[++i].
 * - The array's first (i + 1) elements will be the deduplicated result.
 *
 * Algorithm (2 Pointers):
 * 1. Initialize i = 0.
 * 2. For each j from 1 to end:
 *      • If nums[j] != nums[i], increment i and overwrite nums[i].
 * 3. Return i + 1 (the count of unique elements).
 *
 * Time:  O(n)
 * Space: O(1)
 */

var removeDuplicates = function (nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      nums[++i] = nums[j];
    }
  }

  return i + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
