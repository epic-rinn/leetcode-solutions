package main

/**
 * Idea:
 * - Use a stack to validate matching brackets.
 * - When encountering a closing bracket, check if the top of the stack
 *   contains its corresponding opening bracket.
 * - If it matches, pop the stack; otherwise push the character.
 * - A valid string must leave the stack empty at the end.
 *
 * Algorithm:
 * 1. Create an empty stack.
 * 2. Loop through each character in the string:
 *      • If stack is empty, push the character.
 *      • Otherwise compare top of stack with the matching opening bracket.
 *      • If matched → pop; else → push.
 * 3. After processing all characters, return true if stack is empty.
 *
 * Time:  O(n)
 * Space: O(n)
 */

func isValid(s string) bool {
	stack := make([]rune, 0, len(s))

	pairs := map[rune]rune{
		')': '(',
		']': '[',
		'}': '{',
	}

	for _, ch := range s {
		if ch == '(' || ch == '[' || ch == '{' {
			stack = append(stack, ch)
		} else {
			if len(stack) == 0 {
				return false
			}

			top := stack[len(stack)-1]
			if top != pairs[ch] {
				return false
			}

			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}
