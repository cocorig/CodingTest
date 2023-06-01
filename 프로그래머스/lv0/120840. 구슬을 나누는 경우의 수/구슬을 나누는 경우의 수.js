function factorial(n){
    //BigInt는 길이의 제약없이 정수를 다룰수있게 하는 숫자형.
    let bigN = BigInt(n);//3
    console.log(BigInt(0))
    //1이거나 0이면 1을 반환
    if(bigN === BigInt(1) || bigN === BigInt(0)){
        return BigInt(1);
    }
    return bigN * factorial(bigN - BigInt(1));
}


function solution(balls, share) {
    const n = balls;
    const m = share;
    return (factorial(n) / (factorial(n - m)* factorial(m)))
}