function solution(n) {
   
//1.n을 가장작은 소수인 2부터 나눈다.
//2. 나머지가 0이면 그 소수는 정수의 소인수이다.
//3. 나눈 결과를 다시 2로나누고 정수가 소인수로 나눌 수 없을때까지 계속 나누고 , 정수가 1이 되면 소인수 완료.
    let arr = [];
    let i =  2; // i를 초기화하고 반복해야함!!!!
    while(n > 1){//n이 12부터시작해 1보다 크거나 같을때 까지 반복
        if(n % i === 0){
          arr.push(i)
          n = n / i ;
      }else{
          i++;
      }
       
   }
   let ans =  Array.from(new Set(arr));
   return ans.sort((a,b)=> a - b)
}