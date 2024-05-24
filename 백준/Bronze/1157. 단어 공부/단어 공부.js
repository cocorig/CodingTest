const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let obj = {};
for (let i = 0; i < input.length; i++) {
  let char = input[i].toUpperCase();

  obj[char] ? obj[char]++ : (obj[char] = 1);
  // 처음은 1로 설정,0으로 설정하면 없으면 0이되기 때문에  있는 상태가 되지않는다. 다음에 또 나와도 0으로 설정되있으면 없는값으로 간주하기 때문이다.
}
// 뒤에 더 큰 값이 있을 수 있으니까 바로 ?를 리턴하는건 예외상황에 맞지않음
let max = Number.MIN_SAFE_INTEGER;
let maxChar = "";
let isDuplicated = false;
for (char in obj) {
  if (max < obj[char]) {
    max = obj[char];
    maxChar = char;
    isDuplicated = false;
  } else if (max === obj[char]) {
    isDuplicated = true;
  }
}
if (isDuplicated) {
  console.log("?");
} else {
  console.log(maxChar);
}
