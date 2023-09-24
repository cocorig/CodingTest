function solution(s){
   if(s[0] === ')'){
    return false;
  }
  let steck = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '('){
      steck.push(s[i]);
    }else{
    
      if(steck.length === 0){
        return false;
      }
      steck.pop();
    }
  }
  return steck.length === 0; //
}