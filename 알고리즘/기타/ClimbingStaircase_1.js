//공간 최적화 접근 방식을 사용한 계단 오르기 문제
//전체 배열을 저장하는 대신 두 개의 변수만으로 이전 단계에서의 결과를 저장해 공간 복잡도를 O(1) 로 최적화할 수 있다.또한, 이전 단계에서의 결과만을 저장하여 메모리를 더 효율적으로 사용한다.
//시간 복잡도: O(N)
//보조 공간: O(1)
function countWays(n) {
  let prevStep = 1; // 이전 계단에서의 방법의 수
  let prevTwoSteps = 1; // 두 단계 전의 계단에서의 방법의 수

  for (let i = 2; i <= n; i++) {
    let currentStep = prevStep + prevTwoSteps;
    prevTwoSteps = prevStep;
    prevStep = currentStep;
  }

  return prevStep;
}

let n = 4;
console.log(countWays(n));
