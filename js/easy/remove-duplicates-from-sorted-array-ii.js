/**
 * Idea:
 * - Allow each number to appear at most twice.
 * - Use two pointers:
 *      • `i` scans through the array.
 *      • `j` marks the position to write the next valid element.
 * - Compare nums[i] with nums[j-2]:
 *      • If equal → adding nums[i] would create a 3rd duplicate → skip it.
 *      • Else → write nums[i] to nums[j] and advance j.
 *
 * Algorithm:
 * 1. Start i = 2, j = 2 since the first two elements are always allowed.
 * 2. While i < length:
 *      • If nums[i] == nums[j-2], skip (i++).
 *      • Otherwise write nums[i] to nums[j], then j++ and i++.
 * 3. Return j as the new valid array length.
 *
 * Time:  O(n)
 * Space: O(1)
 */

var removeDuplicates = function (nums) {
  let i = 2; // faster pointer
  let j = 2; // slower pointer
  while (i < nums.length) {
    if (nums[j - 2] == nums[i]) {
      i++;
    } else {
      nums[j] = nums[i];
      j++;
      i++;
    }
  }

  return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
