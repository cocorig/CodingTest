function solution(i, j, k) {
    let cnt = 0;
    for(let num = i; num <=j; num++){
   
        let arr = num.toString().split('');
        arr.map((n)=>{
           if(n == k){
              cnt += 1;
            
           }else{
               return 0;
           }
         })
       
   }
 return cnt;
}