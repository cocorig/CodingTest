const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const items= input.map((item)=>+item);


solution(items);
function solution(items){

    //어떤 숫자를 42로 나누면 0~42까지의 숫자가 등장
    const answer = Array(42).fill(0);//0~41까지 0으로 차있는 배열을 만듬
    for(let i=0; i<10; ++i){
        const nowChar = +items[i] % 42;
        answer[nowChar]++;
        
    } //[0,1,1,1,1,1,1,1,1,1,1,0,0,0,...]
    let cnt =0;
    for(i=0; i <answer.length; i++){
        if(answer[i]!==0){//배열의 값이 0이 아닐때 출력
                            //서로 다른 나머지가 몇개있는지 알수있음
            cnt++;         //한번이라도 나왔다면 0이 아닐꺼니까
        }               //1이상이면 한번이라도 등장한거니까
    }
    console.log(cnt);
}

