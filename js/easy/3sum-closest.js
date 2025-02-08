/**
 * Idea:
 * - Sort the array so pointer movement is predictable:
 *      • l++ increases the sum
 *      • r-- decreases the sum
 * - Fix one index i, then use two pointers (l, r) to explore all triplets.
 * - Keep track of the closest sum (`ans`) by comparing distances to `target`.
 * - No need to skip duplicates since we only return one numeric result.
 * - If a sum equals target, return immediately (cannot get closer).
 *
 * Algorithm:
 * 1. Sort nums.
 * 2. For each i, set l = i+1 and r = end.
 * 3. While l < r:
 *      • Compute sum = nums[i] + nums[l] + nums[r]
 *      • Move l or r depending on whether sum is smaller/larger than target
 *      • Update ans if this sum is closer to target
 *      • Return early if sum == target
 *
 * Time:  O(n²)
 * Space: O(1)
 */

var threeSumClosest = function (nums, target) {
  const sn = nums.sort((a, b) => a - b);
  let i = 0;
  let ans = undefined;

  while (i < sn.length) {
    let l = i + 1;
    let r = sn.length - 1;

    while (l < r) {
      const sum = sn[i] + sn[l] + sn[r];

      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return sum;
      }

      const prevDistance = Math.abs(target - ans);
      const currentDistance = Math.abs(target - sum);

      if (prevDistance > currentDistance || ans == undefined) {
        ans = sum;
      }
    }

    i++;
  }

  return ans;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
