package main

/**
 * Idea:
 * - Instead of using a nested loop (O(n²)), we use a hash map to achieve O(n).
 *
 * Algorithm:
 * 1. Iterate through the array once.
 * 2. For each number `val`, compute its complement: `pair = target - val`
 * 3. Check if the complement already exists in the map.
 *    - If yes → return the stored index and current index.
 * 4. Otherwise, store `val` and its index in the map.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for i, v := range nums {
		n := target - v

		ni, exists := m[n]
		if exists {
			return []int{ni, i}
		}

		m[v] = i
	}

	// In the case of not matching pair
	return []int{-1, -1}
}
