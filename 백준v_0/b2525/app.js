const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

h = Math.floor((a * 60 + b + c )/60); //시간을 분으로
m = Math.floor(a * 60 +  b + c) % 60;
if(h >=24){
    h -=24;
}


console.log(h , m)