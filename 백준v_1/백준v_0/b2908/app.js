const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
splitedInput =input[0].split(' ');


const reversePrint = (str)=>{

    let output =''; //문자열 생성
    for(let i =2; i>=0; i--){
        output+= str[i];
    }
    console.log(output);
};





solution(splitedInput[0],splitedInput[1]);

function solution(A,B) {

    for(let i =2; i>=0; i--){
        let nowA = A[i]; //4
        let nowB = B[i]; //3
        if(nowA > nowB ){
            reversePrint(A);
            return;
        }else if(nowA < nowB){
            reversePrint(B);
            return;
        }
    }
}