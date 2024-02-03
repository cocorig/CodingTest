function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  // Floyd의 사이클 찾기 알고리즘 사용
  let slow = head,
    fast = head;

  // 링크드 리스트의 중간 찾기
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow, fast);
  // 두 번째 절반을 뒤집기
  let prev = null,
    current = slow;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // 첫 번째 절반과 뒤집힌 두 번째 절반을 비교
  let p1 = head,
    p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

// 입력 배열을 기반으로 링크드 리스트 생성
function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 링크드 리스트를 배열로 변환
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const inputArray = [1, 2, 2, 1];
const inputList = arrayToLinkedList(inputArray);
const result = isPalindrome(inputList);
console.log(result);
// console.log(linkedListToArray(result));
