const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



solution(+input[0],input.slice(1));

function solution(N,arr) {
    let answer =0;
    for(let i=0; i <N; i++){
        let nowS = arr[i]; //한문장씩 꺼내서 검사 year 

        let obj = {}; //앞에 등장했는지 알기위해 문자를 담을 객체생성

        let nowContC = nowS[0];//문장의 첫번째 문자를 꺼냄
        obj [nowContC]=true; //객체에 y를 담음,e,a


        let isGroupWord =true;
        for(let j=1; j<nowS.length; j++){

            if(nowContC !== nowS[j]){ //a와 r가 같지않다면
                if(obj[nowS[j]]){ //객체에 r가 있다면
                    isGroupWord = false;
                } else{ //처음 등장하는 문자면
                    nowContC = nowS[j]; //r를 nowContC에 담고
                    obj[nowS[j]] = true;//객체에도 담음
                }
            }
        }
        if(isGroupWord){
            answer++;
        }
    }
    console.log(answer);
}