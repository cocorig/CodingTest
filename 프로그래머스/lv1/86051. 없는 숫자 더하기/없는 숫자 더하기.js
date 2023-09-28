function solution(numbers) {
   
  const arr = [0,1,2,3,4,5,6,7,8,9]
  const n = arr.filter((v)=> !numbers.includes(v))
  return n.reduce((acc, v)=> acc + v, 0);
}