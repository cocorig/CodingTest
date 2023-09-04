function solution(n)
{

  let ans = n.toString().split('').reduce((acc, v)=>{
      return acc + Number(v); 
  }, 0)

  return ans;
}
