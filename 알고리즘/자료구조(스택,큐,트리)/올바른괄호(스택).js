function solution(s){

  if(s[0] === ')'){
    return false;
  }

  if(s[s.length - 1] === '('){
    return false;
  }

  let stack = []; 

  for(let i = 0; i < s.length; i++){
    

      stack.push(s[i]);

      if(stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')'){
        stack.pop();
        stack.pop();
      }
  }
  return stack.length > 0  ?  false : true;
}

console.log(solution("()()()"))