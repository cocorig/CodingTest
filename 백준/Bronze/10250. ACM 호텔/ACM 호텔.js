const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testData = Number(input[0]);

for (let i = 1; i <= testData; i++) {
  const row = input[i].split(" ").map(Number);
  const H = row[0];
  const W = row[1];
  const N = row[2];

  let floor = N % H;
  let roomNumber = Math.ceil(N / H);

  if (floor === 0) {
    floor = H;
  }

  console.log(floor * 100 + roomNumber);
}