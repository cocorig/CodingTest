const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let max1;
n =  input[0]
input= input[1];
input=input.split(' ').map((item)=>+item);
let dp = []; 
for(let i=0;i<n; i++){
if(i === 0){ 
dp.push(input[i])
max1 = dp[i]
continue;
}
let max = dp[i-1] + input[i];
if(max > input[i]){
    dp.push(max);
}else{
    dp.push(input[i])
}

max1 = Math.max(max1,dp[i])
// max1 = dp[0]
// for(let i = 0; i < dp.length -1; i++){
// if(max1 < dp[i+1]){
//     max1 = dp[i+1]
// }
//}

}
console.log(max1)
