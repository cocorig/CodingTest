function solution(array) {
  const arr =[];
  let max = -1;
  let index;
    array.filter((n , i)=>{
     
      if(n > max){
         max =  n
         index = i
         }
    })
    arr.push(max, index)
    return arr;
}