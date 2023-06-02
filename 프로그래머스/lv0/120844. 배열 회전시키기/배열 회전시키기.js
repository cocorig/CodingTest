function solution(numbers, direction) {
   let result = []
   if(direction == 'right'){
       numbers.unshift(numbers.pop());
   }else{
       numbers.push(numbers.shift());
   }
     result = numbers;
    return result;
    
}