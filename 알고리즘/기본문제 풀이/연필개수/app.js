
//학생 1인당 연필이 1자루씩
//N명이 학생이 있을때 필요한 연필의 다스 수는?
//N명-> n개의 연필이 필요 25명 25자루 
function solution(N){
    let answer = Math.ceil(N / 12)

    return answer;
}
    
console.log(solution(178));
    
//ceil =  소숫점이 있으면 올려버림 2.xxx- > 3
//floor = 소수점 내림  2.xxx -> 2
//round = 2.5 -> 3 , 2.44 -> 2 
//sqrt  제곱근  16 -> 4;