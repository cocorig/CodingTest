function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const deleteDuplicates = function (head) {
  /* 
ListNode {
  val: 1,
  next: ListNode { val: 1, next: ListNode { val: 2, next: [ListNode] } }
}
ListNode {
  val: 1,
  next: ListNode { val: 2, next: ListNode { val: 3, next: null } }
}
ListNode { val: 2, next: ListNode { val: 3, next: null } }
ListNode { val: 3, next: null }
*/
  if (head === null || head.next === null) {
    return head;
  }
  // 다음 노드의 값과 중복일 때
  if (head.val === head.next.val) {
    head.next = head.next.next; // 다음 노드로 넘어감
    //console.log(head); //head:  ListNode { val: 1, next: ListNode { val: 2, next: null } }
    return deleteDuplicates(head); // 재귀함수를 이용해 다시 반복
  } else {
    //  다음 노드의 값과 다를 때 다음으로 넘어가면서 중복확인
    head.next = deleteDuplicates(head.next);
    return head;
  }
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

// 예제 입력: [1, 1, 2]
const inputArray = [1, 1, 2, 3];
const inputList = arrayToLinkedList(inputArray);
// console.log(inputList);
// ListNode {
//   val: 1,
//   next: ListNode { val: 1, next: ListNode { val: 2, next: null } }
// }
// console.log("Original Linked List:", linkedListToArray(inputList));

// deleteDuplicates 함수 적용
// console.log(inputList);
const result = deleteDuplicates(inputList);
console.log(result);
console.log(linkedListToArray(result));
