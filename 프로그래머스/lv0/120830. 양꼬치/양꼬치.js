function solution(n, k) {
    let num = 0;
    let result=0;
    if(n >= 10){
        num = Math.floor(n / 10);
    }
    result = (n * 12000) + (k * 2000) - (num * 2000);
    return result;
}