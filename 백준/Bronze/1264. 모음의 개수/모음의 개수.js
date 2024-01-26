const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "#") {
    break;
  } else {
    const vowels = input[i].match(/[aeiou]/gi);
    console.log(vowels ? vowels.length : 0);
  }
}
