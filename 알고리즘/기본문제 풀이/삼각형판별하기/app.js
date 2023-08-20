
    
//조건: 가장 긴변의 길이 < 나머지 길이의 합 , 가장 긴변의 길이 !== 나머지 길이의 합
//1. 최댓깂을 찾고
//2. 최대값을 뺀 나머지 합을 구함-> 비교

function solution(a, b, c){

    let answer= 'YES' , max;
    let sum =  a + b + c; //총 합
    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    // 작은 두 수의 길이 <= 가장 긴 변의 길이는 삼각형이 될 수 없다.
    if((sum - max) <= max) answer = 'NO' ;
    return answer;
}

console.log(solution(6,7,11));
