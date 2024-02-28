/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
  if (!head || !head.next) return head;
  let left = head;
  let mid = findMid(head);
  let right = mid.next;
  mid.next = null;

  return merge(sortList(left), sortList(right));
};

const merge = (left, right) => {
  let merged = new ListNode();
  let node = merged;

  while (left && right) {
    if (left.val < right.val) {
      node.next = left;
      left = left.next;
    } else {
      node.next = right;
      right = right.next;
    }
    node = node.next;
  }
  node.next = left || right;
  return merged.next;
};

function findMid(head) {
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
