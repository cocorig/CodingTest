
function solution(arr) {
 
const  sum = arr.reduce((acc , v)=>{
  return acc +  v;
},0)

return sum /  arr.length;

}
   


