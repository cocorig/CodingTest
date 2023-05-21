const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const N = input[0];  

let fibo = [0,1];

for(let i=2; i <= N; i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
}
console.log(fibo[N]);