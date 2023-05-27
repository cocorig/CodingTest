function solution(n) {
    let sum=0;
    const list =  String(n) //숫자를 문자열로 바꿔줌
    const arr = Array.from(list) //문자열을 배열로 변경
    arr.map((n)=>{
        
        sum =  sum + Number(n);
    })
    return sum;
}