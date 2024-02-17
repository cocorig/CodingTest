class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Insert at index

  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Remove at index

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  // Remove at data
  removeDataAt(data) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        this.size--;
        return;
      }

      previous = current;
      current = current.next;
    }
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100); // LinkedList { head: Node { data: 100, next: null }, size: 0 }
ll.insertFirst(200);
ll.insertLast(300);
ll.insertAt(500, 1); // 값 , 위치 ,두번째 인덱스에 위치
ll.insertAt(500, 10); // 없는 인덱스면 그냥 패스함 -> 다르게 해도 됨

ll.removeDataAt(100); //
ll.printListData();
// ll.getAt(1); // 500
ll.removeAt(0); /// 0번째 값 삭제
// ll.printListData();
// 200;
// 500;
// 100;
// 300;

ll.clearList(); //삭제
