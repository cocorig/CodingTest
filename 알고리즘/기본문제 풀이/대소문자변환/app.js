
function solution(s){  
    let answer="";
    for(let v of s){
        if(v === v.toUpperCase()){
            answer += v.toLowerCase();
        }else if(v === v.toLowerCase()){
            answer += v.toUpperCase()
        }
    }
    return answer;
}

console.log(solution("StuDY"));