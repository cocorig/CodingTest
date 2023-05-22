const { reverse } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let arr;
const items= input[0].split(' ').map((item)=>+item);
const N = items[0]; //5
const M = items[1]; //4
let list
let a=[];
let b;

for(let i =1; i <= N; i++){
    
    a.push(i)
    
}

for(let i = 1; i <= M; i++){
    arr = input[i].split(' ')
    
    
    b = a.slice(arr[0]-1,Number(arr[1])).reverse()
    for(let i=0; i<b.length; i++){
        a[arr[0]-1 + i] = b[i]
        
    }
    
    

}

console.log(a.join(' '))


