function solution(arr)
{
    const stack = [];
  
    for(let i = 0; i < arr.length; i++){
    stack.push(arr[i]);
    if(stack[stack.length - 1] === arr[i + 1]){// 연속된 숫자
      stack.pop();
    }
  }
  return stack;
}