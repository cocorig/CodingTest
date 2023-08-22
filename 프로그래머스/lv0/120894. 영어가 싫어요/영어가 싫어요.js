

function solution(numbers){
  const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  number.forEach((v , i)=>{
    numbers =  (numbers.split(v).join(i)); // number원소로 구분하면 그 자리는 빈 공간이 생김 ,빈 공간을 같은 문자가 있는 number의 인덱스로 채움 -> 
    
  })
  return Number(numbers);
}