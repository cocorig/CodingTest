const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function f(num){ //등차수열인지 확인하는 함수

    const strNum= String(num);//1000
    if(strNum.length <=2){//예외처리:자리수가 1이거나 2 이면 비교하는 값이 없기때문에 무조간 한수
        return true;       
    }
    const diff = +strNum[1] - +strNum[0];
    let beforeNum = +strNum[1];
    for(let i=2; i<strNum.length; i++){
        if(strNum[i] - beforeNum !== diff){
            return false;
        }
        beforeNum = +strNum[i];
                                   //1 2 3 등차수열
    }
    return true;
}



function solution(N) {
let cnt = 0;
for(let i=1; i <=N; i++){
    if(f(i)){//등차수열이면 1증가
        cnt++;
    }
}
    console.log(cnt);
}
