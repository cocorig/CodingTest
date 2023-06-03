function solution(n) { //n= 24일때
    let arr = [];
    for(let i = 1; i<= n/2; i++){ // 1 ~ 12검사 ,24
        if(n % i === 0 ){
            arr.push(i);
        }
    }
    return [...arr, n]
}