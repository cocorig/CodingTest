function solution(array, n) {
   let cnt = 0;
    array.map((v)=>{
        if(v === n){
            cnt += 1;
        }
    })
    return cnt
}