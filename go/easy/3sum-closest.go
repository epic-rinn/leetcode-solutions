package main

import (
	"math"
	"sort"
)

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

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	i := 0
	ans := 0
	asgn := false

	for i < len(nums) {
		l := i + 1
		r := len(nums) - 1

		for l < r {
			s := nums[i] + nums[l] + nums[r]

			if s > target {
				r = r - 1
			} else if s < target {
				l = l + 1
			} else {
				return s
			}

			if asgn == false {
				ans = s
				asgn = true
			} else {
				pd := math.Abs(float64(target - ans))
				cd := math.Abs(float64(target - s))

				if cd < pd {
					ans = s
				}
			}

		}

		i = i + 1
	}

	return ans
}
