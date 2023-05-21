const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [N,M]= input.shift().split(' ');

//console.log(N,M)//3,4


const noHearSet = new Set();
const noSeeSet =  new Set();
for(let i = 0; i <input.length; i++){
    if(i < N){  //i가 0~3
        noHearSet.add(input[i]); 
    }else{
        noSeeSet.add(input[i]);
    }
}
const intersect = [...noHearSet].filter(data => noSeeSet.has(data)).sort()

console.log(intersect.length)
intersect.forEach(element => {
 console.log(element)
});





