function solution(array) {
    let sum = 0;
    for(let i=0; i< array.length; i++){
      let a =   array[i].toString().split('');
       a.map((n)=>{
           if(n === '7'){
               sum += 1;
           }else{
               return 0;
           }
       })
    
    }
    return sum;
}