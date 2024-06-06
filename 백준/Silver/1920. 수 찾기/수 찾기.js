const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N_elements = input[1].split(" ").map(Number);
const M_elements = input[3].split(" ").map(Number);

const N_set = new Set(N_elements); 
const result = M_elements.map((el) => (N_set.has(el) ? 1 : 0));

console.log(result.join("\n"));
