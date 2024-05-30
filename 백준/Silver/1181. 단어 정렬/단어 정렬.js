const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

const arr = [...new Set(input)];

const ans = arr
  .sort()
  .sort((a, b) => a.length - b.length)
  .join("\n");

console.log(ans);
