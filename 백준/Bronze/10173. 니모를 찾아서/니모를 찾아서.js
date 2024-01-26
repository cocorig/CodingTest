const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const Regex = /Nemo/gi;
  if (input[i] === "EOI") {
    return;
  }
  if (Regex.test(input[i])) {
    console.log("Found");
  } else {
    console.log("Missing");
  }
}
