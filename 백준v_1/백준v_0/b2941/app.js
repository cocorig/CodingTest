const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input[0]);

function solution(str) {

    let answer = 0;
    for(let i = 0;i<str.length; ++i)//문자를 하나씩 꺼내서 확인
{
    let c = str[i];
    answer++;
     //abc 3-1=2 지금 c가 마지막 문자라면 
    if(i >=str.length -1){ 
        continue;        //마지막 문자면 조건을 만족시키기 때문에 for문 종료
    }

//항상 문자 다음에 문자가 있다는걸 보장

    if(c ==='c'){ //만약 'c'가 나오면 
        let nextC = str[i+1];//다음 문자를 꺼내서 확인해
        if(nextC === '='|| nextC ==='-'){
            i = i+1; //i를 1증가 시켜 =,-를 그냥뛰어넘게 하기위해
            continue;//다시 for문으로
        }
    }
    if(c ==='d'){ //만약 'd'가 나오면 
        let nextC = str[i+1];//다음 문자를 꺼내서 확인해
        
        if(nextC ==='-'){
            i = i+1; //i를 1증가 시켜 =,-를 그냥뛰어넘게 하기위해
            continue;//다시 for문으로
        }
        if(i <str.length - 2) { //만약 
            let nextNextC = str[i+2];//다음 문자를 꺼내서 확인해
            if(nextC === 'z'&& nextNextC ==='='){
                i = i+2; //위의 조건을 충족시키면 두칸뛰어라
                continue;//다시 for문으로
            }
        }
    }

    if(c ==='l' || c =='n'){ 
        let nextC = str[i+1];
        if(nextC === 'j'){
            i = i+1; 
            continue;
        }
    }
    if(c ==='s' || c =='z'){ 
        let nextC = str[i+1];
        if(nextC === '='){
            i = i+1; 
            continue;
        }
    }

} 
console.log(answer);
}