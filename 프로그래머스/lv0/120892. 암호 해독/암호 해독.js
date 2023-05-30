function solution(cipher, code) {
    var answer = '';
    const length = cipher.length / code;
    for(let i=1; i<=length; i++){
       answer += cipher[(code * i)-1];
    }
  
   
    return answer;
}