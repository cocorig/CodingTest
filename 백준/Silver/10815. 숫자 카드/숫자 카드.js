
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



const M =  input[2]; //8
const ans = [];
const list  = new Set(input[1].split(' ')); //Set(5) { '6', '3', '2', '10', '-10' }
const list2 = input[3].split(' ') //상근이 카드와 비교할 리스트


//list에 있는 원소중에 list2에 포함하고있으면 1출력, 없으면 0출력
for(let i=0; i< M; i++) {

    if(list.has(list2[i])){
        ans.push(1)
    }else{
        ans.push(0)
    }

}
console.log(ans.join(' '))

//[6 3 2 10 -10].includes(6) = > 1출력