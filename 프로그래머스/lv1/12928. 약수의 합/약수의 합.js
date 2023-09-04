function solution(n) {
  const result = [];
  const sqrtN = Math.floor(Math.sqrt(n));
  console.log(sqrtN);// 3

  for(let i = 1; i <= sqrtN; i++){ // 1 ~ 3까지만 반복
      if(n % i === 0){   // 3  % 1 , 3 % 2 , 3 % 3
          result.push(i); // 1 ,3
          if(i !== n / i){
              result.push(n / i);
          }
      }
  }
  const ans = result.reduce((acc , v)=>{
   return acc + v;
  }, 0);
  return ans;
}

console.log(solution(12));