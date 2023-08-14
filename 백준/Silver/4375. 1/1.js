const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


// 1.  각 자릿수가 모두 1로만 이루어진 n의 배수를 찾는다.
// 2.  배수의 자리수를 출력한다.

function solution(n){

  let remainder = 1 % n;
  let num = '1';
  
  while(remainder !== 0){ 
    num += '1';
    remainder =  (remainder * 10 + 1) % n;
  
  }
  return num.length;
}


for(let i = 0; i < input.length; i++){

const ans =   solution(parseInt(input[i]));  //3
console.log(ans);
}


// 1 % n 
// 11 % n 
// 111 % n 
// 1111 % n 
// 1111 % n 
// ---- 0이 될때 n의 배수가 됨