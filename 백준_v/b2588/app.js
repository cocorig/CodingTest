const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input= input.map((item)=>+(item));
num1=input[0];
num2=input[1];

onenum = num2 % 10;
townum = Math.floor((num2%100)/10);
threenum = Math.floor(num2/100);

console.log(num1 * onenum);
console.log(num1 * townum);
console.log(num1 * threenum);
console.log(num1 * num2);





