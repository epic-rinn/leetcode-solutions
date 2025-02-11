/**
 * Idea:
 * - Use a fixed-size sliding window the length of `needle`.
 * - For each index `i`, compare `haystack[i : i + n]` with `needle`.
 * - Return the first index where the substring matches.
 *
 * Algorithm:
 * 1. Let n = needle.length, h = haystack.length.
 * 2. For i from 0 to h - n:
 *      - If haystack.slice(i, i + n) === needle → return i.
 * 3. If no match, return -1.
 *
 * Time Complexity: O(h × n)
 * Space Complexity: O(n)  (substring creation)
 */

var strStr = function (haystack, needle) {
  const n = needle.length;
  const h = haystack.length;
  for (let i = 0; i < h - n; i++) {
    if (haystack.slice(i, i + n) === needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));
console.log(strStr("mississippi", "issip"));
