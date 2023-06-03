function solution(my_string) {
    var answer = my_string.split('');
    const result =  new Set(answer)
    const list = Array.from(result)
    return list.join('');
    //return answer;
}