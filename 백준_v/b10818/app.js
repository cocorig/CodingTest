const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



const arrayLength = +input[0];
const items= input[1].split(' ').map((item)=>+item);


function solution(arrayLength,items){

    let min = 1000001; //모든 정수는 100000보다 작거나 같음
    let max = -1000001;//-100000보다 크거나 같음
for(i=0; i<arrayLength; i++){
    item = items[i];        
    if( min > item){
        min = item;
    }
    if( max < item){
        max = item;
    }
}
console.log(`${min} ${max}`);
    
}
solution(arrayLength,items);