function solution(n) {
    //먼저 짝수를 구하고 더해준다 누적시킴
    let sum = 0;
    for(let i=1; i <=n; i++){
       if(i % 2 ===0){
           sum += i;
       }
       
    }
    return sum;
}