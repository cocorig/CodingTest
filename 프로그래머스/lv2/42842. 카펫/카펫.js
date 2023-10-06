function solution(brown, yellow) {
    let n = brown +  yellow
  // x,y가 나올 수 있는 조합 찾기
  for(let i = 1; i <= Math.sqrt(n); i++) {
    if(n %i  === 0){

      const x = n / i;
      const y = i;
      // console.log(x , y);

      if((x - 2) * (y - 2) === yellow){
        return [x,y]
      }
    }
  }
}