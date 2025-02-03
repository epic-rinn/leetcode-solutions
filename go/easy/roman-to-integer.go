package main

/**
 * Idea:
 * - Roman numerals are normally added left → right (e.g., VI = 5 + 1 = 6).
 * - But if a smaller numeral appears before a larger one, it must be subtracted
 *   (e.g., IV = 5 - 1 = 4).
 * - Compare the current numeral with the next one to decide whether to add or subtract.
 *
 * Algorithm:
 * 1. Create a map `vals` that stores each Roman character and its integer value.
 *    Example: { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }.
 *
 * 2. Initialize `total = 0`.
 *
 * 3. Loop through the string from left to right:
 *    - Let `x` be the value of the current Roman character.
 *    - Let `n` be the value of the next Roman character (`undefined` if none).
 *
 * 4. If `x < n`:
 *       - This is a subtractive pattern (e.g., I before V → 4).
 *       - Subtract `x` from the total.
 *    Else:
 *       - Add `x` to the total.
 *
 * 5. After finishing the loop, return `total`.
 *
 * Time Complexity:
 * - We traverse the string once.
 * - If the input length is n:
 *   Time = O(n)
 *
 * Space Complexity:
 * - The `vals` map is constant size (always 7 entries).
 * - All other variables are constant.
 *   Space = O(1)
 */

func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1, 'V': 5, 'X': 10,
		'L': 50, 'C': 100, 'D': 500, 'M': 1000,
	}

	total := 0
	n := len(s)

	for i := 0; i < n; i++ {
		x := m[s[i]]

		if i+1 < n && x < m[s[i+1]] {
			total -= x
		} else {
			total += x
		}
	}

	return total
}
