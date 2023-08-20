function solution(s){  
  let answer=" ";
  for(let i=0;i<s.length;i++){
      // console.log(s[i], i , s.indexOf(s[i]));

    if(s.indexOf(s[i]) === i){
      answer += s[i];
  
    }
  }
  return answer;
}
console.log(solution("ksekkset"));

//indexOf 첫 번째로 발견된걸 반환 , 최소의 인덱스 값을 반환
//indexOf(s[i] , 1 ) 1번 인덱스에서부터 찾아라
// indexOf -> 발견 못하면 -1 반환

// console.log( i , s.indexOf(s[i]));
// k 0 0
// s 1 1
// e 2 2
// k 3 0
// k 4 0
// s 5 1
// e 6 2
// t 7 7

// k가 몇 개 있는지
function solution(s){  
  let answer= 0;
  let pos = s.indexOf('k'); // 0

  while(pos !== -1){
    answer++;
    pos =  s.indexOf('k' , pos + 1);
    
  }

  // for(let i=0;i<s.length;i++){

  //   if(pos ===  s.indexOf(s[i])){
  //     answer++;
  //   }
   
  // }
  return answer;
}
console.log(solution("ksekkset"));