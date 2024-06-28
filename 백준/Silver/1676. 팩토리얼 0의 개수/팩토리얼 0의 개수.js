const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(fs.readFileSync(filePath).toString().trim());

function solution(N) {
  let cnt = 0;
  let i = 5;
  while (N >= i) {
    cnt += Math.floor(N / i);
    i *= 5;
  }
  return cnt;
}

console.log(solution(N));
