//재귀 이진 검색 알고리즘,O(log n)
//1
function binarySearch(arr, l, r, target) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === target) {
      return mid; // 목표값을 찾은 경우 중간 인덱스를 반환한다.
    }

    // 중간 요소가 목표값보다 큰 경우, 왼쪽 하위 배열에서 재귀적으로 검색을 진행합니다.
    if (arr[mid] > target) {
      return binarySearch(arr, l, mid - 1, target);
    } else {
      // 중간 요소가 목표값보다 작은 경우, 오른쪽 하위 배열에서 재귀적으로 검색을 진행합니다.
      return binarySearch(arr, mid + 1, r, target);
    }
  }

  return -1;
}

let arr = [2, 3, 4, 10, 40];
let target = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, target);

result == -1
  ? console.log("배열에 해당 요소가 존재하지 않습니다.")
  : console.log("해당 요소는 배열의 인덱스 " + result + "에 위치합니다.");

// 2
function RecursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }

  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}
console.log(RecursiveBinarySearch([2, 3, 4, 10, 40], 3));
