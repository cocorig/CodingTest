const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const scoreArr = input[1].split(" ");

const maxScore = Math.max(...scoreArr);
const newScoreSum = scoreArr.reduce((acc, score) => {
  return acc + (score / maxScore) * 100;
}, 0);
console.log(newScoreSum / N);
