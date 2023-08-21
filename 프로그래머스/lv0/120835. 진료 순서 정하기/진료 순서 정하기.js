function solution(emergency){             

  let sortEmergency = [...emergency].sort((a,b)  =>  b - a);

  let ans = [];
  for(let i = 0; i < emergency.length; i++){
    let idx = sortEmergency.indexOf(emergency[i]);
    ans.push(idx + 1);
  }
  return ans;
}