const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let arr=input[0].split('').map((item)=>+(item));

arr.sort(function(a,b)  {
    return b - a;
})

console.log(arr.join(''));