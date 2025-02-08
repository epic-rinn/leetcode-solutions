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

var isValid = function (s) {
  const map = { ")": "(", "]": "[", "}": "{" };

  return (
    s.split("").reduce((stack, c, i) => {
      if (c == "(" || c == "{" || c == "[") {
        stack.push(c);
      } else {
        if (stack.length > 0 && map[c] == stack[stack.length - 1]) {
          stack.pop();
        } else {
          stack.push(c);
        }
      }

      return stack;
    }, []).length == 0
  );
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
