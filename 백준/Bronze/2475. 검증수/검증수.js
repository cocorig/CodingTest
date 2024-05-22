const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
  
const result = input.reduce((sum, n) => sum + n * n, 0) % 10;
console.log(result);