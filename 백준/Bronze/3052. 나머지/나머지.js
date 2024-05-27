const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items= input.map((item)=>+item);

solution(items);
function solution(items){

    
    const arr = Array(42).fill(0);
    for(let i=0; i<10; i++){
        const num = +items[i]%42;
        arr[num]++;

        
    }
    let ans = 0;
    for(let i=0; i<arr.length; i++){
        
        if(arr[i]!==0){
            ans++;
        }
    }
    console.log(ans);
}