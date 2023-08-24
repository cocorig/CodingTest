
function solution(A , B){
  if(A === B){
    return 0;
  }
  let arr = [...A];
  let ans = 0;
  for(let i = 0; i < arr.length; i++){
    arr.unshift(arr.pop());
    arr.join('')
    ans += 1;
    if(arr.join('') ===  B){
      return ans;
    }
  }
  return -1;
}
   
