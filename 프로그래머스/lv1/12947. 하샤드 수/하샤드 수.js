function solution(x) {
  let sum = 0;
  const str = x.toString();
  for(let i of str){
    sum += parseInt(i);
  }

  return x %  sum === 0 ? true : false;

  }