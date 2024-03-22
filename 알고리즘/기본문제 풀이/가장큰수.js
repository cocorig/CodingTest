function solution(numbers) {
  const answer = numbers
    .map((num) => String(num))
    .sort((a, b) => b + a - (a + b));
  console.log(answer);
  return answer[0] === "0" ? "0" : answer; // 예외처리
}
console.log(solution([3, 30, 34, 5, 9])); // 0

/* 예외처리
numbers의 원소는 0 이상 1,000 이하이므로 [0, 0, 0]과 같은 입력배열이 올 수 있다.
이런 경우 어떤 숫자를 조합하더라도 만들 수 있는 가장 큰 수는 0일 것이다.
따라서 첫 번째 원소가 '0'인지를 확인하고, 만약 '0'이라면 나머지 원소들도 모두 '0'이므로 '000'을 '0'으로 반환해야 한다.
 */
/* sort 정의
Array.sort(compareFn?: ((a: T, b: T) => number) | undefined):  이
요소의 순서를 결정하는 데 사용되는 함수입니다. 첫 번째 인수가 두 번째 인수보다 작으면 음수 값을 반환하고, 같으면 0을 반환하고, 그렇지 않으면 양수 값을 반환합니다. 생략하면 요소가 오름차순인 ASCII 문자 순서로 정렬됩니다.

[11,2,22,1].sort((a, b) => a - b)

배열을 제자리에 정렬합니다. 이 메서드는 배열을 변경하고 동일한 배열에 대한 참조를 반환합니다.

function 비교함수(a, b) {
    if (a < b) {
        return -1; - > a가 b보다 먼저
    }
    if (a === b) {
        return 0;
    }
    return 1; -> b > a 이므로 b를 앞으로 정렬,
}
 */
