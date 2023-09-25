function solution(s) {

  // 맨 앞의 문자가 닫기괄호일 경우 바로 false반환
  if(s[0] === ')'){
    return false;
  }
  let steck = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '('){
      steck.push(s[i]);
    }else{
      //')' 닫기괄호인데  steck안의 원소가 없을 경우는 올바르지 않은 괄호이기 때문에 바로 false 반환
      if(steck.length === 0){
        return false;
      }
      steck.pop();
    }
  }
  return steck.length === 0; // 0이면 true , 아니면 false를 바로 반환하게
}