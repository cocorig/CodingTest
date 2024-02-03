// 정의된 링크드 리스트 노드 클래스
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Floyd's Cycle Detection Algorithm을 사용하여 회문 여부 판별 함수
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // 두 번째 포인터가 리스트 끝에 도달하거나, 사이클을 찾을 때까지 반복
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // 한 번에 한 칸씩 이동
    fast = fast.next.next; // 두 번에 한 번씩 이동
    console.log(slow);
    console.log(fast);
  }

  // 중간 이후의 노드들을 뒤집기
  let prev = null,
    current = slow;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // 앞부분과 뒤집힌 뒷부분의 값을 비교
  let p1 = head,
    p2 = prev;
  while (p2) {
    console.log(p1.val, p2.val);
    if (p1.val !== p2.val) {
      return false;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

// 예제 링크드 리스트: 1 -> 2 -> 3 -> 2 -> 4 -> 3 -> 2 -> 1
const exampleList = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        2,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
      )
    )
  )
);
// 예제 링크드 리스트: 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1
// const exampleList = new ListNode(
//   1,
//   new ListNode(
//     2,
//     new ListNode(
//       3,
//       new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
//     )
//   )
// );

// 회문 여부 확인
console.log(isPalindrome(exampleList)); // 출력: true
