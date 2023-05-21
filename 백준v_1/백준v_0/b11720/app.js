const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0],input[1]);

//54321 문자열 
//==['5','4',3','2','1']
function solution(N,Number){
    let sum=0;
    for(let i=0; i<N; i++){

        sum += +Number[i];//문자이기때문에 숫자로 바꿔서 더함
    }
    console.log(sum);
}
