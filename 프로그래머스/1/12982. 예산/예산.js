function solution(d, budget) {
    let result = 0;
  d.sort((a,b) => a - b);

  for(let i = 0; i < d.length; i++){
      if(budget < d[i]) break;
      budget -= d[i];
      result++;
  }
    return result;
}