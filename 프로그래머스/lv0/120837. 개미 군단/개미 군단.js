function solution(hp) {
  
  let a = hp / 5;
  let b =  hp % 5;
  let c = 0;
  let d = 0;
   if(b !== 0 ){
      a =  a + Math.floor(b / 3);
     c = b % 3;
   }if(c !== 0){
      a += Math.floor(c / 1);
      d =  c % 1
   }if(d === 0 ){
       
   }
    return Math.floor(a)
}