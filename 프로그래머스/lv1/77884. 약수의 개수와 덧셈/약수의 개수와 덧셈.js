function solution(left, right) {
  
  let sum = 0;
  for(let i = left; i <= right;  i++){
    
    const sqrt =  Math.floor(Math.sqrt(i));
    let arr = [];
    for(let j = 1; j <= sqrt; j++){
      if(i % j === 0){
        arr.push(j);
      
        if( j !== i / j){
          arr.push(i / j);
        }
      }
      
    }
    let n = arr.length;

    if(n % 2 === 0){ //짝수 , 더힘
      sum += i;
    }else{ // 홀수 , 뺌
      sum -= i;
    }
  }
  return (sum);
 
  
}
