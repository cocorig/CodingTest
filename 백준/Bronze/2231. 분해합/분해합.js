const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const max = Number(input);

for (let i = 1; i <= max; i++) {
  const value = String(i)
    .split("")
    .map((v) => +v)
    .reduce((r, v) => {
      return r + v;
    }, i);
  if (value === max) {
    console.log(i);
    break;
  }
  if (i === max) {
    console.log(0);
  }
}
