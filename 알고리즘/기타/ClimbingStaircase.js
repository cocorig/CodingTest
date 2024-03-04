//  중복되는 하위 계산이 있을 땐 동적 프로그래밍을 사용할 수 있다.

//1. Memoization : 이전에 계산한 값을 저장하여 중복 계산을 피하는 기법/
// 시간 복잡도: O(n)
// 보조 공간: O(n)
// dp 배열은 각 단계에서의 결과를 저장하기 위해 사용한다.
function countWays(n, dp) {
  // n이 1 이하이면 1을 반환함. (계단이 없거나 한 단계만 있는 경우)
  if (n <= 1) return (dp[n] = 1);

  // 함수가 호출될 때마다 해당 인덱스의 값이 -1이 아니라면, 이미 계산된 값이므로 다시 계산하지 않고 그 값을 바로 반환함.
  if (dp[n] != -1) {
    return dp[n];
  }

  // 이전 단계와 그 이전 단계의 방법의 수를 더하여 현재 단계의 방법의 수를 구함.
  dp[n] = countWays(n - 1, dp) + countWays(n - 2, dp);
  console.log(dp);
  return dp[n];
}

// 주어진 계단 수
let n = 4;
// 결과를 저장할 dp 배열을 생성함. 초기값은 -1로 설정
let dp = new Array(n + 1).fill(-1);
console.log("Number of ways = " + countWays(n, dp));

// 2. Tabulation :  반복문과 배열을 사용하여 작은 하위 문제부터 시작하여 큰 문제까지 순차적으로 해결하는 기법
//상향식으로  테이블 dp[]를 생성 , dp[i] = dp[i-1] + dp[i-2]
// function countWays(n) {
//   const dp = [1, 2];
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n - 1];
// }
// console.log(countWays(5));
