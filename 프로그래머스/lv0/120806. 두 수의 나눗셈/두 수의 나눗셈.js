function solution(num1, num2) {
 
    var answer = Math.floor((num1 / num2 ) * 1000);
    console.log(Math.floor(5.95)); //결과 : 5
    console.log(Math.floor(-5.95)); //결과 : 
    return answer;
}
//1. num1을 num2로 나눈다.
//2. 나눈 값에 1000을 곱한다.
//3. 그 값에 정수부분을 구한다.