const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N =+input[0];
const items= input.slice(1);//input[1]부터 잘라서 쓰겠다.



function solution(N,items){
    for(let i=0; i<N; i++){

        const OXList = items[i];//OOXXOXXOOO
        let Ocnt =0;
        let score =0;
        for(j=0; j<OXList.length; j++){
            const OorX = OXList[j];
            if(OorX ==='O'){
                Ocnt++;
                score +=Ocnt;//score = score + Ocnt
            } else{
                Ocnt = 0;
            }         
        }
        console.log(score);
    }

}
solution(N,items);