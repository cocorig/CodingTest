const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const stack = [];

function solution(input) {
  for (let i = 0; i < N; i++) {
    const value = Number(input[i]);
    if (value === 0) {
      stack.pop();
    } else {
      stack.push(value);
    }
  }

  return stack.length > 0 ? stack.reduce((sum, score) => sum + score, 0) : 0;
}

console.log(solution(input));
