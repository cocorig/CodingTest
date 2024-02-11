//주어진 수가 2의 거듭제곱인지를 판별
// 1. 비트연산자 활용,O(1)
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
// 2. O(log n)
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwoBitWise(2)); // true

// 3. O(1)
function isPower1(base, number) {
  return (Math.log(number) / Math.log(base)) % 1 === 0; // O(1
}

console.log(isPower1(2, 8)); // true, 2^3 = 8
console.log(isPower1(3, 10)); // false

// 4.O(log n)
function isPower2(base, number) {
  let power = 1;
  while (Math.pow(base, power) <= number) {
    if (Math.pow(base, power) === number) {
      return true;
    }
    power++;
  }
  return false;
}

console.log(isPower2(2, 8)); // true, 2^3 = 8
console.log(isPower2(3, 10)); // false
