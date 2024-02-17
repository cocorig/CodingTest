function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// [ 3, 3, 3, 4, 4, 5];
const deleteDuplicates = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy;
  // 현재 노드의 다음 노드가 존재하는지 확인

  while (node.next) {
    // 다음 노드와 그 다음 노드가 존재하는지 확인 &&  현재 노드와 다음 노드의 값이 같은지 확인
    // console.log(node);
    if (node.next.next && node.next.val === node.next.next.val) {
      let nonValNode = node.next.next.next;

      // 현재 노드의 다음 노드의 값과 같을 때 계속해서 nonValNode를 이동시킴
      while (nonValNode && nonValNode.val === node.next.val) {
        nonValNode = nonValNode.next;
      }
      node.next = nonValNode;
      console.log(nonValNode);
    } else {
      node = node.next;
    }
  }

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

// 링크드 리스트를 배열로 변환
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const inputArray = [3, 3, 3, 4, 4, 5];
const inputList = arrayToLinkedList(inputArray);
const result = deleteDuplicates(inputList);
// console.log(result);
// console.log(linkedListToArray(result));
