const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let range = 1;
let block = 1;
while (block < input[0]) {
  block += 6 * range;
  range++;
}
console.log(range);