function solution(numlist, n) {


    
return  numlist.sort((a,b)=>
     // (a - b)이기때문에 오름차순으로 정렬->차가 작을수록 가까운수
    Math.abs(a - n) - Math.abs(b - n) || 
        // ||을 썻기때문에
        //차가 같다면(앞의 결과가 0이면) 더 큰게 앞으로 -> 내림차순해라
        
        b - a   
    );


}