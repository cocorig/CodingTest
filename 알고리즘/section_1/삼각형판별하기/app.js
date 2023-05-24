

function solution(a, b, c){
    
//조건: 가장 긴변의 길이 < 나머지 길이의 합
//1. 최댓깂을 찾고
//2. 최대값을 뺀 나머지 합을 구함-> 비교
    let max = 0;
    let arr = [a,b,c];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){ //1 <max 0
            max = arr[i]
        }
    }
    console.log(max)
}

solution(12,33,17)
