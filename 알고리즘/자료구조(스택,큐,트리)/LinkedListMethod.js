// 연결 리스트 메소드 구현
class ListNode {
  constructor(data) {
    this.data = data; //데이터
    this.next = null; // 포인터
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // 1. size() : 연결 리스트에 있는 노드들의 개수를 반환
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // 2. clear() : 리스트를 비우는 역할
  clear() {
    this.head = null;
  }

  // 3. getLast() : 연결 리스트의 마지막 노드를 반환
  getLast() {
    let lastNode = this.head; // 헤드부터 시작하여 마지막 노드를 찾기 위한 변수 초기화
    if (lastNode) {
      // 연결 리스트가 비어있지 않은 경우
      while (lastNode.next) {
        // 다음 노드가 존재하는 동안 반복
        lastNode = lastNode.next; // 다음 노드로 이동
      }
    }
    return lastNode; // 마지막 노드 반환 (연결 리스트가 비어있으면 null 반환)
  }

  // 4. getFirst() : 연결 리스트의 첫 번째 노드를 반환
  getFirst() {
    return this.head;
  }
}

// 테스트를 위해 노드 생성과 연결 리스트 생성
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);
console.log(list);
// LinkedList {
//   head: ListNode { data: 2, next: ListNode { data: 5, next: null } }
// }
// 메소드 테스트
console.log("노드 수:", list.size()); //  2
console.log("첫번째 노드 :", list.getFirst()); //  ListNode { data: 2, next: ListNode { data: 5, next: null } }
console.log("마지막 노드:", list.getLast()); // ListNode { data: 5, next: null }

// 리스트 비우기
list.clear();
console.log(list.size()); //  0
console.log(list.getFirst()); // null
