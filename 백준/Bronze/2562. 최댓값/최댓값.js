const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



const item = input.map((item)=>+item);

solution(item);
function solution(item){

    
    let max = 0;
    let ans = 0;
    for(i=0; i<item.length; i++){

        now = item[i];//3
        
        if(now>max){
            max = now;
            ans =i+1;
        }
        
    }
    console.log(`${max} \n${ans}`);
}