function solution(n) {
    
    let arr =[];
   
   
    for(let i=1; i <=n; i++){ //1~n 검사
        let measure = [];
        for(let j=1; j<=n; j++){
            if(i %  j === 0){
                measure.push(j); //약수들어있음 
            }
            if(measure.length >=3){
               arr.push(i);
               break;
            }
        }
        
    }
    return arr.length;
}