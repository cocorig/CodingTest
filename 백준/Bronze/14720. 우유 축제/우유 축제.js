const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// 딸기 -> 초코 -> 바나나

// 0 -> 1 -> 2 -> 0

const n = parseInt(input[0]); // 배열의 길이
const array = input[1].split(" ").map(Number); // 배열 요소들을 숫자 배열로 변환
let cnt = 0;
let milk = 0;

for (let i = 0; i < n; i++) {
  const current = array[i];
  if (current === milk) {
    cnt++;
    //다음으로 넘어감
    milk = (milk + 1) % 3;
  }
}

console.log(cnt);
