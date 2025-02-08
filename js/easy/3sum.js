/**
 * Idea:
 * - Sort the array so pointer movement becomes predictable:
 *      • Moving left pointer increases the sum.
 *      • Moving right pointer decreases the sum.
 * - Fix one number (i), then use two pointers (l, r) to find pairs that sum to -nums[i].
 * - Skip duplicates for `i`, `l`, and `r` to avoid repeated triplets.
 *
 * Algorithm:
 * 1. Sort nums in ascending order.
 * 2. Loop i from 0 to end:
 *      a. Skip if nums[i] == nums[i-1] (duplicate first element).
 *      b. Set l = i+1 and r = last index.
 * 3. While l < r:
 *      a. Compute sum = nums[i] + nums[l] + nums[r].
 *      b. If sum == 0:
 *           • Add the triplet to the result.
 *           • Skip duplicate left/right values.
 *           • Move both pointers inward.
 *      c. Else if sum < 0 → l++ (increase sum).
 *      d. Else → r-- (decrease sum).
 *
 * Time Complexity: O(n²)
 *    - Sorting O(n log n) + two-pointer scanning O(n²).
 *
 * Space Complexity: O(1)
 *    - Only pointers are used; result array excluded.
 */

var threeSum = function (nums) {
  const sn = nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < sn.length; i++) {
    // skip duplicate for i
    if (i > 0 && sn[i] === sn[i - 1]) continue;

    let l = i + 1;
    let r = sn.length - 1;

    while (l < r) {
      const sum = sn[i] + sn[l] + sn[r];

      if (sum === 0) {
        res.push([sn[i], sn[l], sn[r]]);

        // skip duplicates for left
        while (l < r && sn[l] === sn[l + 1]) l++;
        // skip duplicates for right
        while (l < r && sn[r] === sn[r - 1]) r--;

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return res;
};

console.log(mergeSort([-1, 0, 1, 2, -1, -4]));
