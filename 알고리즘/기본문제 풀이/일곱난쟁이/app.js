function solution(arr){
    const answer = arr; // 얕은 복사(메모상에 같은 주소를 가리킴).arr이 바뀌면 answer도 바뀌는 것 처럼 보임
    const sum = answer.reduce((acc, v)=>{
        return acc + v;
    },0)

    for(let i=0; i < answer.length; i++){
        for(let j = i+1; j < answer.length; j++){

            if((sum - (answer[i]+ answer[j])) === 100){
        
            // 뒤에 인덱스부터 없애도 앞의 인덱스는 변함이 없다.
            answer.splice(j, 1);
            answer.splice(i, 1);
            // arr.splice(i, 1);
            // arr.splice(j-1, 1);
            return answer;
            }
        }
    }
}

const arr=[22, 7, 21, 19,10, 15, 25 ,8, 13];
console.log(solution(arr));