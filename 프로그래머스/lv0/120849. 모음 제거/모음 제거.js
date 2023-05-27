function solution(my_string) {
    var answer = '';
    const mo = 'a,e,i,o,u';
    for(let i=0;i < my_string.length; i++){
        if(!(mo.includes(my_string[i]))){
            
            answer += my_string[i]
        }
    }
    return answer;
}