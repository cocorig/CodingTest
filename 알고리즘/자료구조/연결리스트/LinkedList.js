//연결 리스트(Singly Linked Lists의 경우)의 노드는 데이터와 포인터, 총 2개의 요소를 가진다.
// 연결 리스트의 가장 첫 번째 지점을 헤드(head)라 부른다.
//헤드는 연결 리스트의 첫 번째 노드를 의미하고, 마지막 노드는 null을 가리킨다. 만약 연결 리스트가 비어있는 경우, 헤드는 null을 참조하개 된다.
// 노드는  data를 담는 data field와 다음 노드를 알려주는 linked field로 구성된다.

/* 
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};
*/

// 리스트 노드 구현하기
class ListNode {
  constructor(data) {
    this.data = data; //데이터
    this.next = null; // 포인터
  }
}
// 연결 리스트 구현하기 (헤드 노드에 아무 값도 전달하지 않으면 null로 초기화)
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
let node1 = new ListNode(2); // 두개의 노드
let node2 = new ListNode(5);
// node1.next = node2; //포인터
// console.log(node1);
//ListNode { data: 2, next: ListNode { data: 5, next: null } }

// node1를 사용해 연결리스트 만들기
// let list = new LinkedList(node1);
// console.log(list);
// // LinkedList {
// //   head: ListNode { data: 2, next: ListNode { data: 5, next: null } }
// // }

// // head
// console.log(list.head.data); // 2
// // 다음  값
// console.log(list.head.next.data); // 5
// console.log(list.head.next.next); // null

/* 
    Head
      |
  +------+      +------+      +------+
  |  2  | | --->|  5 |  | ---> | null |
  +------+      +------+      +------+
    node1         node2        null
    (2, next)     (5, next)

*/

module.exports = LinkedList;
