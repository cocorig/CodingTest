const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function findMinimumOnesMultiple(n) {
    let num = '1';
    let remainder = 1 % n;

    while (remainder !== 0) {
        num += '1';
        remainder = (remainder * 10 + 1) % n;
    }

    return num.length;
}

for (let i = 0; i < input.length; i++) {
    const n = parseInt(input[i]);
    const result = findMinimumOnesMultiple(n);
    console.log(result);
}
