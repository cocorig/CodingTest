const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let ans = ''
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(i of str){
        ans += i
    }
    console.log(ans)
});