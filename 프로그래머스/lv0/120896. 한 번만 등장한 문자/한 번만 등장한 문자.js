function solution(s){
  let arr = Array(s.length).fill(0);
  let ans = [];
  for(let i = 0; i<s.length; i++){

  let idx = s.indexOf(s[i]);
  arr[idx] += 1;
  }  
arr.filter((v , i) => {
  if(v == 1){
    ans.push(s[i]);
  }
  });
  return ans.sort((a, b) => a.localeCompare(b)).join('');
  }

