const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(x) {
    this.queue[this.tail++] = x;
  }

  pop() {
    if (this.head === this.tail) {
      return -1;
    }
    const value = this.queue[this.head];
    delete this.queue[this.head++];
    return value;
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.head === this.tail ? 1 : 0;
  }

  front() {
    if (this.head === this.tail) {
      return -1;
    }
    return this.queue[this.head];
  }

  back() {
    if (this.head === this.tail) {
      return -1;
    }
    return this.queue[this.tail - 1];
  }
}

function solution(input) {
  const queue = new Queue();
  const results = [];

  for (let i = 0; i < input.length; i++) {
    const [cmd, value] = input[i].split(" ");

    switch (cmd) {
      case "pop":
        results.push(queue.pop());
        break;
      case "size":
        results.push(queue.size());
        break;
      case "empty":
        results.push(queue.empty());
        break;
      case "front":
        results.push(queue.front());
        break;
      case "back":
        results.push(queue.back());
        break;
      case "push":
        queue.push(Number(value));
        break;
      default:
        break;
    }
  }

  return results;
}

const results = solution(input);
console.log(results.join("\n"));
