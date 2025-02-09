/**
 * Idea:
 * - Use a dummy node to simplify merging and avoid edge-case handling.
 * - Compare the heads of both lists and always attach the smaller node.
 * - Move the pointer forward in the list from which the node was taken.
 * - Continue until one list ends, then attach the remaining list.
 * - Final merged list starts at dummy.next.
 *
 * Algorithm:
 * 1. Create a dummy node and a `current` pointer.
 * 2. While both lists exist:
 *      • Attach the smaller node to current.next.
 *      • Advance pointer in that list.
 *      • Move current forward.
 * 3. After loop, link the remaining non-empty list.
 * 4. Return dummy.next.
 *
 * Time:  O(n + m)
 * Space: O(1)   (reuses existing nodes; only one dummy node created)
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const mergedList = new ListNode();
  const current = mergedList;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }

    current = current.next;
  }

  mergedList.next = list1 || list2;

  return mergedList.next;
};
