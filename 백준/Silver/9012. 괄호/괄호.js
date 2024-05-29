const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input[0];

function isValidVPS(str) {
  let cnt = 0;
  for (let char of str) {
    if (char === "(") {
      cnt++;
    } else if (char === ")") {
      if (cnt === 0) {
        return false;
      }
      cnt--;
    }
  }
  return cnt === 0;
}
for (let i = 1; i <= T; i++) {
  const str = input[i];
  console.log(isValidVPS(str) ? "YES" : "NO");
}
