function solution(numbers) {
    let max = numbers[0] * numbers[1]; 
  
    for(let i =0; i < numbers.length -1; i++){
        const n =  numbers[i] //1
        for(let j = i+1; j < numbers.length; j++){
            const muti =  n * numbers[j]  //1 * 2,1*-1...
            if(max < muti){
                max =  muti;
            }
            
         }
    }
   return max;
}