class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

// 링크드 리스트를 위한 새로운 헤드 초기화
let head = null;

// 링크드 리스트에 루프가 있는지 감지하는 함수
function detectLoop(head) {
  console.log(head);
  let slowPointer = head;
  let fastPointer = head;

  while (
    slowPointer != null &&
    fastPointer != null &&
    fastPointer.next != null
  ) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    // console.log(fastPointer);
    if (slowPointer == fastPointer) return true;
  }

  return false;
}

// 새로운 값들을 추가
head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

// 예제를 위해 루프를 추가
let temp = head;
while (temp.next != null) temp = temp.next;

temp.next = head;

console.log(detectLoop(head)); // 출력: true
