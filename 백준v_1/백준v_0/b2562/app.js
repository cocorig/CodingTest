const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const items= input.map((item)=>+item);



function solution(items){

    let max =0; //자연수이기때문에 
    let index = 0; //i 를 담을 변수
    for(let i=0; i<9; i++){
        item =items[i];

        if(max<item){
            max=item;
            index = i;
        }
        
    }
    console.log(max);
    console.log(index+1);

}
solution(items);