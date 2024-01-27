/*
첫 번째 원소를 제거하는 shift()의 경우, O(n)의 시간복잡도를 가지기 때문에 많은 데이터를 빠르게 관리하기 위해서는 연결 리스트(객체)로 큐를 구현해 사용하는 것이 좋다.
이렇게 객체를 사용하면 원소의 추가, 삭제 연산을 O(1) 시간에 해결할 수 있다.
 */

class ListNode {
  constructor(data) {
    this.data = data; // 데이터
    this.next = null; // 포인터
  }
}
class Queue {
  constructor() {
    this.front = null; // 큐의 맨 앞
    this.back = null; // 큐의 맨 뒤
    this.size = 0; // 큐의 크기
  }
  // 큐가 비어있는지 확인하는 메소드
  isEmpty() {
    return this.size === 0;
  }
  enqueue(data) {
    const newNode = new ListNode(data); // 새로운 노드 생성

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }

    this.back = newNode;
    this.size++; // 큐의 크기 증가
  }
  dequeue() {
    // 데이터를 추출하는 작업
    if (this.isEmpty()) {
      throw new Error("큐가 비었습니다"); // 큐가 비어있으면 아무 작업도 수행하지 않음
    }
    const data = this.front.data;
    this.front = this.front.next;
    this.size--;
    return data;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue);

/*
 Queue {
  front: ListNode { data: 2, next: ListNode { data: 3, next: null } },
  back: ListNode { data: 3, next: null },
  size: 2
}
 */
