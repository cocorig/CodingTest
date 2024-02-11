//골드바흐의 추측은 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것을 주장하는 수학적 추측, O(n log n)
// JavaScript program to implement Goldbach's conjecture

// 최대값을 설정한다.
let MAX = 10000;

// 모든 소수를 저장할 배열을 선언
let primes = new Array();

// 선다람의 체 알고리즘을 구현
function sieveSundaram() {
  // 주어진 범위의 소수를 찾기 위해 필요한 배열을 초기화
  let marked = new Array(parseInt(MAX / 2) + 100).fill(false);

  // 선다람의 체 알고리즘의 주요 로직을 수행힌다.
  for (let i = 1; i <= (Math.sqrt(MAX) - 1) / 2; i++)
    for (let j = (i * (i + 1)) << 1; j <= MAX / 2; j = j + 2 * i + 1)
      marked[j] = true;

  // 2는 소수이므로 primes 배열에 추가힌다.
  primes.push(2);

  // 나머지 소수들을 primes 배열에 추가힌다.
  for (let i = 1; i <= MAX / 2; i++)
    if (marked[i] == false) primes.push(2 * i + 1);
}

// 골드바흐의 추측을 검증하는 함수를 구현힌다.
function findPrimes(n) {
  // 주어진 숫자가 유효한 짝수인지 확인힌다.
  if (n <= 2 || n % 2 != 0) {
    console.log("Invalid Input");
    return;
  }
  // 주어진 숫자를 두 소수의 합으로 나타낼 수 있는지 확인힌다.
  for (let i = 0; primes[i] <= n / 2; i++) {
    //두 소수가 n의 절반보다 크다면, 두 소수의 합은 n보다 커지기 때문에 두 소수는 n의 절반보다 작아야함. 따라서 n / 2까지 범위를 둠
    // 차이를 계산힌다.
    let diff = n - primes[i]; // 주어진 짝수 n이 10이고,primes[i]가 3이면,두 번째 소수를 찾기 위해 diff = 10 - 3 = 7이된다. 즉 n = diff + primes[i]이 성립된다.

    // 차이가 소수인지 확인힌다.
    if (primes.includes(diff)) {
      // 두 소수를 출력하여 골드바흐의 추측을 만족시킵니다.
      console.log(primes[i] + " + " + diff + " = " + n);
      return;
    }
  }
}

sieveSundaram();

findPrimes(10); //3 + 7 = 10
findPrimes(38); //7 + 31 = 38
findPrimes(100); //3 + 97 = 100
