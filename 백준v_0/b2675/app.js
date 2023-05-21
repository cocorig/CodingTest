const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



let rsArray = [];
for(let i=1; i <=+input[0]; i++)
{
    const inputRS = input[i];  //input[1]=3 ABC
    const splitedInputRS = inputRS.split(' '); //3 과 ABC가 나뉘게 됨
    rsArray.push({
        R: +splitedInputRS[0], //3   //5
        S: splitedInputRS[1],   //ABC ///HTP
    });
    
}

solution(+input[0],rsArray);

function solution(N,rsArray){

    for(let i=0; i<N; i++){     //i=0
        let {R ,S} = rsArray[i];//R:3 , S: ABC
        let P =''; //빈문자열 생성

        for(let j =0; j<S.length; j++){ //j=0          j=1           j=2
            for(let k=0; k<R; k++){     //k=0 k=1 K=2 //k=0 K=1 k=2//k=0 k=1 k=2
                P +=S[j];  // P =P+S[j]
            }                     //AAABBBCCC
        }
        console.log(P);
    }

}
