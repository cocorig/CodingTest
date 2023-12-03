const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input[0]);

function solution(str) {

    let splitedStr = str.split(' ');

    let cnt =0;
    for(i=0; i<splitedStr.length; i++){
        if(splitedStr[i].length !==0){ //단어의 길이가 0이 아니면 셈=앞뒤에 공백이 있을수 있기 때문
            cnt++;
        }
        
    }
    console.log(cnt);
}