const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const testArray = [];
for(let i=0; i<input.length; i++){

    if (input[i] ===''){//마지막 빈 문자열이 들어올수도있기때문에 예외처리
        break;
    }
    const value =input[i].split(' ').map((item)=>+item);
    testArray.push({A: value[0], B: value[1]});
    
}


function solution(testArray) {
    
    let A =0;
    let B =0;
    let idx=0;              //초기화
    while(idx !==testArray.length){
        
        A= testArray[idx].A;
        B= testArray[idx].B;
        console.log(A+B);
        idx++;
    }
}

solution(testArray);