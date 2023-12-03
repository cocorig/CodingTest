const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const items= input[1].split(' ').map((item)=>+item);


solution(+input[0],items);
function solution(items){

    
    let max =101;  
    
    for(let i=0; i<3; i++){
        item =items[i];

        if(max<item){
            max=item;
            
        }
        
    }
    console.log(max);
    
    
}

