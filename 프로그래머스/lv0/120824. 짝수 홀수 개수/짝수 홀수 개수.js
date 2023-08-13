function solution(num_list) {
  let answer = [0,0];

  num_list.forEach(item =>{
    if(item % 2 === 0){
      answer[0]++;
    }else if(item % 2 !== 0){
      answer[1]++;
    }
  })
    return answer;
}