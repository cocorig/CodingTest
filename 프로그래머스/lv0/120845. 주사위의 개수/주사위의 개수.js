function solution(box, n) {
    
   let answer =  box.map(i=>
       Math.floor(i / n));
    console.log(answer)
  
  return answer.reduce((a,b)=> a * b);
    //배열 요소 곱하기
  
}