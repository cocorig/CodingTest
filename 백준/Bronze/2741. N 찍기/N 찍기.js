const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(fs.readFileSync(filePath, "utf8").trim());

let ans = "";
for (let i = 1; i <= N; i++) {
  ans += i + "\n";
}

console.log(ans);
