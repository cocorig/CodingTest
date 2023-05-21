const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(S){
    let result = ''
    let answerArray = new Array(26).fill(-1);//a~z 26개의 알파벳이 들어갈 배열을 만듬
    for(let i=0; i<S.length; i++){

        let nowChar = S[i];
        let idex = nowChar.charCodeAt()-97;
        if(answerArray[idex] ===-1){
            answerArray[idex] =i;
        }
    }

    for(let i =0; i<answerArray.length; i++){
        result += answerArray[i] + ' ';
    }
    console.log(result)
}
