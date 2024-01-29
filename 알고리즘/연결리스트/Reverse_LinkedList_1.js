function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/* 
1,null -> 2,1,null-> 3,2,1,null -> 4,3,2,1,null -> 5,4,3,2,1,null

const list = {
    head: {
        value: 1
        next: {
            value: 2                                            
            next: {
                value: 3
                next: {
                    value: 4
                    next:  {
                      value: 5
                      next: null	
                      }
                    }
                }
            }
        }
    }
};
*/

const reverseList = function (head) {
  let prev = null; // 현재 노드의 이전 노드를 가리킴
  let current = head; // 현재노드를 가리킴
  // 현재 노드가 null이 아닌 동안 아래의 과정을 반복
  while (current) {
    // 1.current이후의 노드를 가리키는 포인터 생성
    let next = current.next; // 2,3,4,5,null
    // 2. current.next를  이전 노드를 가리키도록 함
    current.next = prev;
    // console.log(current.next); // null,1,2,3,4
    //3. prev 포인터를 현재 노드로
    prev = current;
    //console.log(prev); //1,2,3,4,5
    // 4. current 포인터를 다음 노드로 이동
    current = next;
    console.log(prev);
  }
  head = prev;
  return head;
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
const result = reverseList(inputList);
// console.log(result);
// console.log(linkedListToArray(result));
