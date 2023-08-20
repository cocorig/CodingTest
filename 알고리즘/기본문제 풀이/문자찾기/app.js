function solution(s, t){
    // let answer=0;

    // for(let item of s){
    //     if(item ===  t){
    //         answer++;
    //     }
    // }
    console.log(s.length); //20
    let answer = s.split(t)
    return answer -1;
}

let str="COMPUTERPROGRAMMINGR";
console.log(solution(str, 'R'));

//구분자 내장함수이용 (split)                       R이 끝에있어도 빈문자열로 반환
//'R'을 기준으로 나누면  => [ 'COMPUTE', 'P', 'OG', 'AMMING', '' ] split->문자열배열형태로 반환