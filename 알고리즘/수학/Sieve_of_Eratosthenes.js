//에라토스테네스의 체 (에라토스테네스의 체는 주어진 범위 내의 모든 소수를 찾는 효율적인 알고리즘으로, 주어진 범위 내에서 각 수의 배수를 제거하는 방식을 사용), O(N)

const MAX_SIZE = 1000001;
const isPrime = Array(MAX_SIZE).fill(true); // isPrime 배열을 true로 초기화
const prime = []; // 소수를 저장할 배열
const SPF = Array(MAX_SIZE); // 각 수의 가장 작은 소인수를 저장하는 배열

function findPrimes(N) {
  // 0과 1은 소수가 아님
  isPrime[0] = isPrime[1] = false;

  // 소수를 찾아서 prime 배열에 저장하고, 각 수의 가장 작은 소인수를 SPF 배열에 저장
  for (let i = 2; i < N; i++) {
    if (isPrime[i]) {
      prime.push(i);
      SPF[i] = i; // 소수의 가장 작은 소인수는 그 소수 자체
    }

    // i의 배수들 중 소수가 아닌 것을 제거
    for (
      let j = 0;
      j < prime.length && i * prime[j] < N && prime[j] <= SPF[i];
      j++
    ) {
      isPrime[i * prime[j]] = false;
      SPF[i * prime[j]] = prime[j]; // i*prime[j]의 가장 작은 소인수를 prime[j]로 설정
    }
  }
}

// 주어진 수보다 작은 모든 소수를 출력
function printPrimes(N) {
  for (let i = 0; i < prime.length && prime[i] <= N; i++) {
    console.log(prime[i] + " ");
  }
}

// 드라이버 코드
const N = 13;
findPrimes(N);
printPrimes(N);
