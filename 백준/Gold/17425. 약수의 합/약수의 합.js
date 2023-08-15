const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// const len =  +input[0] // 5
// const input1 = input.slice(1,len + 1);


// for(let i = 0; i < len; i++){
//   let sum = 0;
//   const n = +input1[i]

//   for(let j = 1; j <= n; j++){

//       sum += j * Math.floor(n / j);
//     }
  
  
// console.log(sum);

// }

let fx = new Array(1000001).fill(1); //// 해당 자연수의 모든 약수를 더한 변수.
let dp= new Array(1000001); // // 해당 자연수 이하의 모든 fx값을 더한 변수.
fx[0] = 0;
dp[0] = 0;

for(let i = 2; i<=1000000; i++){
  for(let j = 1; i * j<=1000000; j++){
    fx[i * j] += i;
  }
}

for (let i = 1; i <= 1000000; i++) {
  dp[i] = dp[i - 1] + fx[i];
}


const N = input.shift(); // 5

const answer = [];

input.forEach(item=>{
  answer.push(dp[item])
})



console.log(answer.join('\n'))
