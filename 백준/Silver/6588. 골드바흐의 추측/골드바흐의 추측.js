const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

let result = '';
// 주어진 수보다 작은 소수 중에 가장 큰 수 찾기
const max = Math.max(...input);

let isPrime = new Array(max + 1).fill(true);

isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (isPrime[i]) {
    let multiple = 2;
    while (i * multiple <= max) {
      isPrime[i * multiple] = false;
      multiple++;
    }
  }
}

input.forEach((item) => {
  if (item >= 4 && item % 2 === 0) {
    for (let i = 2; i <= item / 2; i++) {
      if (isPrime[i] && isPrime[item - i]) {
        result += `${item} = ${i} + ${item - i}\n`;
        break;
      }
    }
  }
});

console.log(result);
