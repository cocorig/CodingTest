const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const inputArray = [];
for(let i =1; i <=arrayLength; i++){
    const arr = input[i].split(' ');
    inputArray.push({
        N : +arr[0],
        arr: arr.slice(1).map((item)=>+item)
    });
}
console.log(inputArray);

function solution(C,inputArray ){

    for(i=0; i<C; i++){
        const item =inputArray[i];

        let average = 0;
        for(j=0; j<item.N; j++){//1.평균 내기
            average +=item.arr[j];//학생들 점수 합
        }
        average /= item.N;//점수에서 학생수를 나누면 평균이 나옴
        
        let cnt = 0;
        for(j=0; j<item.N; j++){
            if(average < item.arr[j]){
                cnt ++;
            }
        }
        let anwer = cnt / item.N;//평균보다 높은 학생수 나누기 총 학생수
        console.log((anwer * 100).toFixed(3) + '%');
    }
}
solution(arrayLength,inputArray);