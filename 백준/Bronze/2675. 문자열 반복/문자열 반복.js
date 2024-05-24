const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

input.slice(1, T + 1).forEach((line) => {
  const [R, S] = line.split(" ");
  const ans = S.split("")
    .map((char) => char.repeat(Number(R)))
    .join("");
  console.log(ans);
});
