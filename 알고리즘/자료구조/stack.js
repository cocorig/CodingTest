//  LIFO(Last In First Out)
//  이전의 작업 내용을 저장해 둘 필요가 있을 때 사용 , 웹 브라우저의 방문기록을 쌓아 뒤로 가기가 같은 개념,재귀 알고리즘과 DFS 알고리즘
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    // 데이터를 집어넣는 작업
    this._arr.push(item);
  }
  pop() {
    // 데이터를 추출하는 작업
    return this._arr.pop();
  }
  peek() {
    // 맨 나중에 집어넣은 데이터를 확인하는 작업
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); //Stack { _arr: [ 1, 2, 3 ] }
stack.pop(); // 3
console.log(stack.peek()); // 2
