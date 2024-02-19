function mergeSort(arr) {
  // 1. 주어진 배열이 하나의 요소만을 가질 때까지 분할하는 재귀적인 함수입니다.
  if (arr.length < 2) {
    return arr; // 2. 배열의 길이가 1 또는 0이면 그대로 반환하여 종료합니다.
  }

  // 3. 배열을 반으로 나누는 작업입니다.
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid); // 배열의 왼쪽 절반을 leftArr에 할당합니다.
  const rightArr = arr.slice(mid); // 배열의 오른쪽 절반을 rightArr에 할당합니다.

  // 4. 각 하위 배열을 정렬하기 위해 mergeSort 함수를 재귀적으로 호출합니다.
  const sortedLeftArr = mergeSort(leftArr); // 왼쪽 하위 배열을 정렬합니다.
  const sortedRightArr = mergeSort(rightArr); // 오른쪽 하위 배열을 정렬합니다.

  // 5. 정렬된 하위 배열을 병합하여 정렬된 배열을 반환합니다.
  return merge(sortedLeftArr, sortedRightArr);
}

function merge(leftArr, rightArr) {
  // 6. 정렬된 두 개의 하위 배열을 병합하여 하나의 정렬된 배열을 생성합니다.
  const sortedArr = [];

  // 7. 양쪽 배열에서 요소를 하나씩 비교하여 작은 값을 정렬된 배열에 추가합니다.
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift()); // 왼쪽 배열의 첫 번째 요소를 pop하여 sortedArr에 추가합니다.
    } else {
      sortedArr.push(rightArr.shift()); // 오른쪽 배열의 첫 번째 요소를 pop하여 sortedArr에 추가합니다.
    }
  }

  // 8. 한 배열이 모두 빈 배열이 될 때까지 위 과정을 반복합니다.
  // 9. 남은 요소들을 정렬된 배열에 추가합니다.
  return [...sortedArr, ...leftArr, ...rightArr]; // 정렬된 배열과 남은 요소들을 합쳐 반환합니다.
}

// 예시 배열을 생성하고 mergeSort 함수를 호출하여 정렬합니다.
const arr = [8, 20, -2, 4, -6];
const sortedArr = mergeSort(arr);

// 10. 정렬된 배열을 출력합니다.
console.log(sortedArr); // 출력: [-6, -2, 4, 8, 20]
