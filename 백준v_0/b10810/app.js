const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



let n=input[0].split(' ').map((n)=>+(n)); //5,4
let N = n[0]; //5
let M = n[1]; //4
let arr;
let newarr = new Array(N).fill(0);
let k;

for(let i=1; i <= M; i++){

    arr = input[i].split(' ')
    k = arr[2];
    for(let j=arr[0]-1; j<= arr[1]-1; j++){
        
    
    newarr[j] = k
    
    }
    
}
console.log(newarr.map((n)=>+(n)).join(' '))

