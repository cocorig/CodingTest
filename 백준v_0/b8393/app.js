const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



function solution(n) {
    // Write your code
    let sum = 0;
    for(let i =1; i<=n; i++){
        //sum =sum +i;
        sum+=i;
    }
    console.log(sum);
}

solution(+input[0]);