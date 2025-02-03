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

function twoSum(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const val = numbers[i];
    const pair = target - val;

    if (map.has(pair)) {
      return [map.get(pair), i];
    }

    map.set(val, i);
  }
}
