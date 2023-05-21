const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const N= input[0] 
let arr = []; 
let sum;

for(let i = 2; i <= N; i++){
    let n = 0;
    let m = 1;
    sum = n + m //1
    sum = m + sum //1 + 1 =2
    
    console.log(sum)
}
