const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



function solution(N) {
    // Write your code
    
    for(let i =1; i<=N; i++){
        console.log(i);
    }
    
}

solution(+input[0]);