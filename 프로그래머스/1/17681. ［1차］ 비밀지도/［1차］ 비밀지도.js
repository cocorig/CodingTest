function solution(n, arr1, arr2) {
    const answer = [];
   
   for(let i = 0; i < n; i++){
       const combined = (arr1[i] | arr2[i]).toString(2).padStart(n,0) 
       
       const decodedLine = combined.replace(/1/g, '#').replace(/0/g , ' ')
       
       answer.push(decodedLine)
   }
    return answer;
}