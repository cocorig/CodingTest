function solution(arr, divisor) {
     const divisibleNumbers = arr.filter((v) => v % divisor === 0);

  if (divisibleNumbers.length === 0) {
    return [-1];
  }

  return divisibleNumbers.sort((a, b) => a - b);
}