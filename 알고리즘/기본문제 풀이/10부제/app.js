
    function solution(day, arr){
        let answer = 0;

        for(let x of arr){
            if(x % 10 ===  day) answer++;
        }
        return answer;
    }
    
    arr=[25, 23, 11, 47, 53, 17, 33];
    console.log(solution(3, arr));

    //어떤 수든 10으로 나눈 나머지가 일의자리, 몫은 그 앞에 수