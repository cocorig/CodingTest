const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testcase= +input[0];
const arr=input.slice(1);


solution(testcase,arr);
function solution(testcase,arr){
    
    for(i=0; i<testcase; i++){

        const nowarr = arr[i];//OOXXOXXOOO
        let sum = 0;
        let cnt = 0;
        for(j=0; j<nowarr.length; j++){
            const nowc = nowarr[j];
            if(nowc ==='O'){
                cnt++;
                sum +=cnt;
            }else{

                cnt=0;
            }
        }
        console.log(sum);
    }
}