const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim();

let num = 666;
let count = 0;

while (true) {
  if (String(num).includes("666")) {
    count++;
    if (count == n) {
      console.log(num);
      break;
    }
  }
  num++;
}