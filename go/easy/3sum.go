package main

import (
	"sort"
)

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

func threeSum(nums []int) [][]int {
	var res [][]int
	sort.Ints(nums)

	i := 0
	for i < len(nums) {
		fn := nums[i]
		if i > 0 && fn == nums[i-1] {
			i = i + 1
			continue
		}

		l := i + 1
		r := len(nums) - 1

		for l < r {
			s := fn + nums[l] + nums[r]

			if s > 0 {
				r = r - 1
			} else if s < 0 {
				l = l + 1
			} else {
				res = append(res, []int{fn, nums[l], nums[r]})
				l = l + 1
				r = r - 1

				for nums[l] == nums[l-1] && l < r {
					l = l + 1
				}

				for nums[r] == nums[r+1] && l < r {
					r = r - 1
				}
			}
		}
		i = i + 1
	}

	return res
}
