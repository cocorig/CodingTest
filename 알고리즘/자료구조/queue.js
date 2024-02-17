// 큐는 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)로서 많이 사용
// 데이터를 집어넣을 수 있는 선형(linear) 자료형, FIFO(First In First Out)
// 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업, BFS 알고리즘, 프로세스 관리
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    // 데이터를 집어넣는 작업
    this._arr.push(item);
  }
  dequeue() {
    // 데이터를 추출하는 작업
    return this._arr.shift(); // 앞에서 추출
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue); //Queue { _arr: [ 2, 3 ] }
