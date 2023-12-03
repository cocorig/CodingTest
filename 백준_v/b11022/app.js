const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const testArray=[];

for(let i=1; i<= +input[0]; i++){
    const value= input[i].split(' ').map((item)=>+item);
    testArray.push({A: value[0], B: value[1]});
}



function solution(T ,testArray){

    for(let i =0; i <T; ++i){

        const A =testArray[i].A;
        const B =testArray[i].B;
        const C = A+B;
        console.log(`Case #${i+1}: ${A} + ${B} = ${C}`);
    }
    

}

solution(+input[0],testArray);

