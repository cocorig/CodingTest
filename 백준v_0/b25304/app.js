const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const X = +input[0]; //260000원
const N = +input[1] // 4개
let sum =0;
for(let i = 2; i <= N +1; i++){
    
    let value = input[i].split(' ').map((n)=>+n);
    sum += value[0]  * value[1];

}

console.log(X === sum ? 'Yes' : 'No');


