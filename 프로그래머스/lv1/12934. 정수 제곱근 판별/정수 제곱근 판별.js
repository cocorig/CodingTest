function solution(n) {
  const sqrt =  Math.pow(n, 0.5);
  if( sqrt === Math.floor(sqrt)){
    return Math.pow(sqrt + 1, 2)  
  }else{
    return -1;
  }
}