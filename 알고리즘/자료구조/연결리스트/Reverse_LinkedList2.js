function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseBetween = function (head, left, right) {
  if (left === right) return head;
  if (!head || !head.next) return head;
  let prev = null;
  let current = head;
  let startCurrent = head; // SC
  let startPrevious = null; // SP
  for (let i = 1; i < left; i++) {
    startPrevious = current;
    current = current.next;
    startCurrent = current;
  }
  for (let i = left; i <= right; i++) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
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

// 예제 입력: [1,2,3,4,5]
const inputArray = [1, 2, 3, 4, 5];
const inputList = arrayToLinkedList(inputArray);
const result = reverseBetween(inputList, 2, 4);
// console.log(result);
// console.log(linkedListToArray(result));
