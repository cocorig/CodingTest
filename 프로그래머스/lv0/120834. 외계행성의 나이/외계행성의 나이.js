function solution(age) {
    let list = 'abcdefghij';
    let answer = age.toString().split("").map(Number);
    let result ='';
    for(let i=0; i < answer.length; i++){
      result +=  list[answer[i]];

    }
    return result;
  
  }
 

   
