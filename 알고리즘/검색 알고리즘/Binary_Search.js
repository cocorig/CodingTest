//이진 검색 알고리즘,조건:정렬된 배열이여야 함, 두개의 포인터를 가짐,O(log n),Iterative Binary Search
function BinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = leftIndex + Math.floor(leftIndex + rightIndex) / 2;
    console.log(middleIndex);
    // 중간 요소가 목표값과 동일한지 확인한다.
    if (target === arr[middleIndex]) {
      return middleIndex; // 목표값을 찾은 경우 중간 인덱스를 반환한다.
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(BinarySearch([-5, 2, 10, 4, 6], 6));
