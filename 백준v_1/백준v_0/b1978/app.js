const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = input[0];
const arr=input[1].split(' ').map((item)=>+(item));
let cnt = 0;
function PrimeNumber(i){//i는 2
        if(arr[i] === 1){
            return;
        }
        for(let j=2; j<= arr[i]-1; j++){ 
            if(arr[i] % j == 0){ 
                return false;
            }
        }

        return true;
    }   

for(let i = 0; i < n; i++){ //i=0,1,2,3,4
    if(PrimeNumber(i) === true){
        cnt = cnt +1;
    }
}

console.log(cnt)
