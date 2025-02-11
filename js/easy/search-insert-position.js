/**
 * Idea:
 * - Use binary search to find the index where `target` exists or should be inserted.
 * - If target is found → return its index.
 * - If not found → `end + 1` gives the correct insertion position.
 *
 * Algorithm:
 * 1. Initialize start = 0 and end = nums.length - 1.
 * 2. While start <= end:
 *      a. Compute mid.
 *      b. If nums[mid] > target → search left half.
 *      c. If nums[mid] < target → search right half.
 *      d. If equal → return mid.
 * 3. After the loop, return end + 1 (correct insert index).
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return end + 1;
};
