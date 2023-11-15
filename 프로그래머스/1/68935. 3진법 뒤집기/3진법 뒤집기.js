function solution(n) {
     
    const reversedTernary = n.toString(3).split('').reverse().join('');
    
  
    const answer = parseInt(reversedTernary, 3);

    return answer;
}