const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');




const testArray =[]; //testArray는 배열이다
for (let i =1; i <=+input[0]; ++i){
    const tempvalue =input[i].split(' ').map((item)=>+item);
    testArray.push({ A :tempvalue[0], B:tempvalue[1]});
    console.log(tempvalue);
}
console.log(testArray);
solution(+input[0],testArray);

function solution(T, testArray){
    for(let i =0; i <T; ++i){

        const A =testArray[i].A;
        const B =testArray[i].B;
        console.log(A+B);
    }

}
