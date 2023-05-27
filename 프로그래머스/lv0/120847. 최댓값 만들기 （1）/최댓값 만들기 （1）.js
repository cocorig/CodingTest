function solution(numbers) {
    
   numbers.sort((a, b) =>(a - b));
   let a = numbers.length -1;
   let b =  numbers.length - 2;
   return (numbers[a] * numbers[b]);
}