function solution(n) {
  let i = 2;
  while(n % i !== 1){ // false일때 빠져나감
    i++;
  }
  return i;
}
