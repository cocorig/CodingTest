const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let stack = [];
let ans = [];
const commands = {
  push: (x) => stack.push(x),
  top: () => (stack.length === 0 ? -1 : stack[stack.length - 1]),
  size: () => stack.length,
  empty: () => (stack.length === 0 ? 1 : 0),
  pop: () => (stack.length === 0 ? -1 : stack.pop()),
};

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(" ");
  if (command === "push") {
    commands.push(Number(value));
  } else {
    ans.push(commands[command]());
  }
}
console.log(ans.join("\n"));
