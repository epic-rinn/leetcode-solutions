/**
 * Idea:
 * - Scan the string from the end to efficiently locate the last word.
 * - Skip all trailing spaces.
 * - Once a non-space is found, count characters until the next space appears.
 * - This avoids extra memory allocations from trim/split and works in O(n) time.
 *
 * Algorithm:
 * 1. Initialize a counter `l` for the last word length, and pointer `p` at the end.
 * 2. Move `p` backward:
 *      - If current char is a space and we haven't started counting → skip it.
 *      - If current char is a space and counting has started → return `l`.
 *      - Otherwise (non-space) → increment `l` (we are inside the last word).
 * 3. If the loop finishes, return `l` (string may start directly with a word).
 *
 * Time Complexity: O(n)
 *    - Each character is inspected at most once.
 *
 * Space Complexity: O(1)
 *    - Uses only constant extra variables.
 */

var lengthOfLastWord = function (s) {
  let l = 0;
  let p = s.length - 1;

  while (p >= 0) {
    const isSpace = s[p--] == " ";
    if (l != 0 && isSpace) return l;
    if (isSpace) continue;
    l++;
  }

  return l;
};
