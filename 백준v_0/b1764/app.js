const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [N,M]= input.shift().split(' ');

//console.log(N,M)//3,4

// 조건 1. 듣도 못한 사람과 보도 못한 사람의 명단은 중복되는 이름이 없음 -> set() 활용

// 조건 2. 듣보잡의 수와 그 명단은 사전순으로 출력 -> sort() 활용

// 조건 3. 첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어짐

// 조건 4. 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다.
const noHearSet = new Set();
const noSeeSet =  new Set();
for(let i = 0; i <input.length; i++){
    if(i < N){  //i가 0~3
        noHearSet.add(input[i]); 
    }else{
        noSeeSet.add(input[i]);
    }
}
const intersect = [...noHearSet].filter(data => noSeeSet.has(data)).sort()

console.log(intersect.length)
intersect.forEach(element => {
    console.log(element)
});

// let name =[];
// //n_arr와 m_arr 같은 값이 있는지 비교 출력
// let cnt = 0;
// for(let i =0; i< n_arr.length; i++){ //'ohhenrie\r'
//     for(let j=0; j< m_arr.length; j++){
//         if(n_arr[i] === m_arr[j]){
//             cnt += 1;
//             name.push(n_arr[i])
//         }
//     }
// }
// console.log(cnt)
// name = name.sort().map((e)=>{
//     console.log(e)
//     })




