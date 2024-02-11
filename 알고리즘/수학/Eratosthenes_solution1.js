//에라토스테네스의 체를 사용하여 주어진 범위의 모든 소수의 합을 구하라
/*
입력 : L = 10, R = 20 
출력 : 합 = 60 
[10, 20] 사이의 소수는 
11, 13, 17, 19 
따라서 합 = 11 + 13 + 17 + 19 = 60 
 */
// 주어진 범위 [L, R] 내의 모든 소수의 합을 계산하는 함수
function sieveOfEratosthenesSum(L, R) {
  // 각 숫자가 소수인지 아닌지를 저장하는 배열을 생성
  const isPrime = new Array(R + 1).fill(true);

  // 0과 1은 소수가 아니므로, false로 표시
  isPrime[0] = isPrime[1] = false;

  // 에라토스테네스의 체 알고리즘을 사용하여 소수를 찾는다.
  // 2부터 R의 제곱근까지의 모든 숫자에 대해 반복힌다.
  for (let i = 2; i <= Math.sqrt(R); i++) {
    // 현재 숫자가 소수인 경우
    if (isPrime[i]) {
      // 각 소수의 배수를 소수가 아닌 것으로 표시
      // i의 제곱부터 R까지 i씩 증가하면서 반복
      for (let j = i * i; j <= R; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 주어진 범위 [L, R] 내의 모든 숫자에 대해 소수인 경우 해당 숫자를 합산
  let s = 0;
  for (let i = L; i <= R; i++) {
    if (isPrime[i]) {
      s += i;
    }
  }
  return s;
}

// 드라이버 코드
const L = 10;
const R = 20;
console.log(sieveOfEratosthenesSum(L, R));
