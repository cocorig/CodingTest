function solution(brown, yellow) {
   // x * y = 1
  // 2x * 2y  + 4 = 8
  // 1. x * y가 yellow와 같아야 하니까, yellow의 약수인 x와 y를 먼저 찾자!
  for(let i = 1; i <= yellow; i++) {
    // 1.1 x를 1부터 시작해서 yellow의 약수인지 확인
    if(yellow % i === 0){
      // x가 약수라면 y는 yellow / x가 될거
      const x = yellow / i;
      const y =  i
      console.log(x,y);
      // 2. x와 y를 알았으니까 조건에 맞는지 확인함 , brown은  2x + 2x + 4
      if((2 * x)+ (2 * y) + 4 === brown){

        return [x + 2 , y + 2] 
      }
    }

  }
 
}