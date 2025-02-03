package main

import "math"

/**
 * Idea:
 * - A negative number cannot be a palindrome because of the minus sign.
 * - Reverse the number mathematically (without converting to string).
 * - Compare the reversed number with the original value.
 *
 * Algorithm:
 * 1. If x is negative, return false immediately.
 * 2. Extract the last digit
 * 3. Append the digit to the reversed value
 * 4. Drop the last digit from x
 * 5. If `rev === x`, the number is a palindrome → return true.
 *
 * Time Complexity: O(log(x))
 * Space Complexity: O(1)
 */

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	rev := 0
	n := x
	for n > 0 {
		mod := n % 10
		rev = rev*10 + mod
		n = int(math.Floor(float64(n) / 10))
	}

	if rev == x {
		return true
	}

	return false
}
