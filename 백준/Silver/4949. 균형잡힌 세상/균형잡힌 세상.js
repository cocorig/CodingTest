const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop(); 

function solution(input) {
  const result = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
  };

  for (const line of input) {
    const stack = [];
    let isBalanced = true;

    for (const char of line) {
      if (char === "(" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "]") {
        if (stack.length > 0 && stack[stack.length - 1] === bracketPairs[char]) {
          stack.pop();
        } else {
          isBalanced = false;
          break;
        }
      }
    }

    if (isBalanced && stack.length === 0) {
      result.push("yes");
    } else {
      result.push("no");
    }
  }

  console.log(result.join("\n"));
}

solution(input);
