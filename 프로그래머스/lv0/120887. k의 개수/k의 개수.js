function solution(i, j, k) {
  let arr = '';
  for(let n = i; n <= j; n++){
    arr += n;
  }
   const ans = arr.split('').filter(v => {
    return v === k.toString();
  });
  return ans.length;
 }
