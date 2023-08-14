const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

const N = parseInt(input);

let sum = 0;

  for(let i = 1; i <= N; i++){
    sum += i * Math.floor((N) / i);
    }

console.log(sum);

