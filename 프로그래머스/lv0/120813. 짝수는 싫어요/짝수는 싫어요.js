function solution(n) {
    var answer = [];
    for(let i =1; i <=n; i++){
        if(i % 2 !== 0 ){
            answer.push(i)
        } 
    }
    return answer;
}
//n이하 홀수만 뽑기