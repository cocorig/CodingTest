const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((el) => el.split(" ").map(Number));
const ans = input
  .sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  })
  .map((el) => el.join(" "))
  .join("\n");

console.log(ans);
