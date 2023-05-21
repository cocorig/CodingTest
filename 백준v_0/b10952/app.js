const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const testArray = [];
for(let i=0; ; i++){//종료조건 따로 적어주지않고
    const value =input[i].split(' ').map((item)=>+item);
    testArray.push({A: value[0], B: value[1]});
    if (value[0]=== 0 && value[1]=== 0){
        break; //종료조건
    }
}
console.log(testArray);

function solution(testArray) {
    
    let A =testArray[0].A;//1로 초기화
    let B =testArray[0].B;//1
    let idx=1;              //초기화
    while(A !==0 || B !==0){
        console.log(A+B); 
        A= testArray[idx].A;
        B= testArray[idx].B;
        idx++;
    }
}

solution(testArray);