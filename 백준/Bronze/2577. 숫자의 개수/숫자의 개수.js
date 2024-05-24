const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const items= input.map((item)=>+item);



function solution(items){

    const num = items[0]*items[1]*items[2];
    const strnum =String(num); //문자로 만들면 각 자리 수를 꺼내볼수있음
    
    
    const answer = Array(10).fill(0);//0~9까지 0으로 차있는 배열을 만듬
    for(let i=0; i<strnum.length; ++i){
        const nowChar = +strnum[i];
        answer[nowChar]++;
    } 
    
    for(i=0; i <answer.length; i++){
        console.log(answer[i]);
    }
}

solution(items);