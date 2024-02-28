//보조 공간 복잡도 : O(n)
// 시간 복잡도 : O(n log n)
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// 주어진 연결 리스트의 모든 노드 값을 저장하기 위해 새로운 배열이 필요하므로 O(n)의 보조 공간이 필요
const sortList = function (head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  //O(n log n)
  result.sort((a, b) => a - b);

  let dummy = new ListNode(-1); // 임시공간,가짜노드
  let temp = dummy;
  //ListNode { val: -1, next: null }
  for (let val of result) {
    temp.next = new ListNode(val);

    temp = temp.next;
  }
  console.log(dummy);
  return dummy.next;
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

const inputArray = [-1, 5, 3, 4, 0];
const inputList = arrayToLinkedList(inputArray);
const result = sortList(inputList);
console.log(result);
