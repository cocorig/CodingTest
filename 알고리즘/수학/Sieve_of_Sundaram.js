//n보다 작은 소수를 모두 출력하는 선다람의 체 ,  O(n log n)
//숫자 n이 주어지면 n보다 작거나 같은 모든 소수를 출력한다.
/*
입력: n = 20
출력:  2, 3, 5, 7, 11, 13, 17, 19
*/

// 주어진 숫자 n보다 작은 모든 소수를 출력
function SieveOfSundaram(n) {
  //1. 선다람의 체 알고리즘은 홀수에 대해서만 작동하므로 n을 반으로 줄입니다.
  let nNew = (n - 1) / 2;

  //2. 소수를 판별하기 위해 사용할 배열인 marked를 초기화,소수가 아닌 수를 표시하는 데 사용한다.
  let marked = [];

  //3. 소수기 아닌 수를 true로 표시하기 위해 false로 초기화
  for (let i = 0; i < nNew + 1; i++) marked[i] = false;

  // 주요 로직: 소수가 아닌 수는 i + j + 2ij 형태로 표현됩,  (단, i와 j는 1 이상이며, i와 j는 같거나 작아야 한다.)
  for (let i = 1; i <= nNew; i++)
    for (let j = i; i + j + 2 * i * j <= nNew; j++)
      marked[i + j + 2 * i * j] = true;

  // 2는 소수이므로, n이 2보다 큰 경우에는 2를 출력
  if (n > 2) console.log(2);

  // 나머지 소수들은 2i + 1 형태로 나타납니다. marked[i]가 false인 경우 해당 소수를 출력
  for (let i = 1; i <= nNew; i++)
    if (marked[i] == false) console.log(2 * i + 1);
}

// 주어진 숫자
let n = 20;
SieveOfSundaram(n);
