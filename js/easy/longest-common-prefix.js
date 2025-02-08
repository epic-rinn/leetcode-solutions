/**
 * Idea:
 * - Compare characters of all strings at the same index to build the longest common prefix.
 * - Stop immediately when:
 *      • A string runs out of characters, OR
 *      • A mismatch occurs at the current index.
 * - Only add a character to the prefix if all strings match at that position.
 *
 * Algorithm:
 * 1. Initialize index `i = 0` and an empty prefix string `cp = ""`.
 * 2. Loop indefinitely:
 *      a. For each string, check its character at position `i`.
 *      b. If any string has no character at index `i`, return the prefix so far.
 *      c. For the first string, store the current character into the prefix accumulator.
 *      d. For all other strings, compare their character with `cp[i]`.
 *         - If mismatch → return prefix up to index `i`.
 * 3. If all strings match at character `i`, increment `i` and continue.
 *
 * Time Complexity: O(N × K)
 *    - N = number of strings
 *    - K = length of the shortest string
 *    - Each character is checked at most once → O(total characters).
 *
 * Space Complexity: O(K)
 *    - `cp` grows with the size of the common prefix (at most K).
 */

var longestCommonPrefix = function (strs) {
  let i = 0;
  let cp = "";

  while (true) {
    for (let j = 0; j < strs.length; j++) {
      let char = strs[j][i];

      if (!char) return cp.slice(0, i);

      if (j == 0) cp += char;

      if (cp[i] == char) {
        continue;
      } else {
        return cp.slice(0, i);
      }
    }
    i++;
  }
};

console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]) == "");
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
