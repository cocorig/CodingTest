function solution(numbers, direction) {
  let ans = [];
    if(direction == "right"){
      //  뒤의 원소를 빼서 앞으로 

     numbers.unshift( numbers.pop())
 
    } 
    else if(direction == "left"){
    //앞에 원소를 빼서 뒤로 
  
 
       numbers.push(numbers.shift());
   
    }
    ans =  numbers;
    return ans;
  }
