function solution(s) {
    
  
    const input = s.split(' ');
    let stack = [];
    let sum = 0;
    for(let i = 0; i <  input.length; i++){
        if(input[i] === 'Z'){
            stack.pop();
            
            continue;//Z일때 z는 배열에 넣지 않기위해 다시 반복문으로 돌아간다.
        }
        stack.push(input[i]);//z가 아닐때
    }
     console.log(stack)
    
    stack.map((n)=>{
       let num =  Number(n); //1,3
        sum += num; //1 + 3 =
        
    })
    return sum;
}