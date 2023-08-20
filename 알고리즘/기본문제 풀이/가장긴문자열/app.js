

function solution(arr){  
  let answer="" , max=Number.MIN_SAFE_INTEGER; // 가장 작은 숫자로 초기화

  for(let v of arr){
    if(v.length > max){
      max = v.length;
      answer =  v;
    }
  }
  return answer;
}
let arr=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(arr));
