function solution(num, k) {
  
   let str =  String(num);
   let arr =str.split('').map((n)=>Number(n))
   let index = arr.indexOf(k) 
   if(index === -1){
       return -1
   }else{
       return index + 1;
   }
   
}