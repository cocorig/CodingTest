//반복 이진 검색 알고리즘,while 루프를 사용하여 키를 비교하고 검색 공간을 두 부분으로 분할하는 프로세스를 계속 진행한다. O(log n)

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1; //4
  let mid; //2

  // 검색 범위가 좁혀질 때까지 반복한다.
  while (r >= l) {
    console.log(`${l}에서 ${r}까지 검색을 시작합니다.`);
    mid = l + Math.floor((r - l) / 2); // 중간 인덱스를 계산한다.
    // 중간 요소가 목표값과 동일한지 확인한다.
    if (arr[mid] === target) {
      return mid; // 목표값을 찾은 경우 중간 인덱스를 반환한다.
    }
    // 목표값이 중간 요소보다 작은 경우, 검색 범위를 왼쪽으로 좁힌다.
    if (arr[mid] > target) {
      r = mid - 1; // 1
    }
    // 목표값이 중간 요소보다 큰 경우,검색 범위를 오른쪽으로 좁힌다.(시작 인덱스를 나타내는 l변수를 옮긴다.)
    else {
      l = mid + 1; // 3
    }
  }
  return -1;
}

let arr = new Array(2, 3, 4, 10, 40);
let target = 2;
let result = binarySearch(arr, target);

result == -1
  ? console.log("배열에 해당 요소가 존재하지 않습니다.")
  : console.log("해당 요소는 배열의 인덱스 " + result + "에 위치합니다.");
