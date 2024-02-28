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
  let left = head,
    right = findMid(head),
    temp = right.next;
  right.next = null;
  right = temp;
  return merge(sortList(left), sortList(right));
};

const merge = (l1, l2) => {
  let hd = new ListNode();
  let node = hd;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  node.next = l1 || l2;
  return hd.next;
};

const findMid = (head) => {
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
