function solution(s){
    let answer= ' ';

    for(let x of s){
        let answer = s;
        return answer.replace(/A/g,'#');
        // if( x  === 'A') answer += '#';
        // else answer += x;
    }


}
let str="BANANA";
console.log(solution(str));

// answer.replace(/A/g,'#');
//A라는 대문자를 찾아서 #로 바꿔라, g(전역으로) 글로벌로 전체로 검색해야함,
//replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환. 그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수있다.