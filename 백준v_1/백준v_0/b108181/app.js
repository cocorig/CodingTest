const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let n = input[0];
const arr = input[1].split(' ').map((v)=>+(v));

arr.sort((a,b)=>a-b);
console.log(`${arr[0]} ${arr[n-1]}`)
