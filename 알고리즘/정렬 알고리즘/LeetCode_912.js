//558 ms	71.3 MB
// 피벗 요소를 선택하고 배열 요소를 재배열하여 선택한 피벗 요소보다 작은 모든 요소는 피벗의 왼쪽으로 이동하고 더 큰 요소는 모두 오른쪽으로 이동한다.
// 마지막으로 피벗 요소의 왼쪽과 오른쪽에 있는 하위 배열을 재귀적으로 정렬한다.
// Divide and Conquer에 기반한 알고리즘
var sortArray = function (nums) {
  let len = nums.length;
  // 배열의 길이가 1 이하이면 이미 정렬된 상태이므로 바로 반환한다.
  if (len < 2) return nums;

  // 퀵 정렬 알고리즘 호출한다.
  quickSort(nums, 0, len - 1);
  // 정렬된 배열 반환한다.
  return nums;
};

var quickSort = function (nums, start, end) {
  // 배열,시작인덱스,끝 인덱스를 받는다.
  // 시작 인덱스가 끝 인덱스보다 크거나 같으면 정렬할 부분 배열이 없으므로 종료한다.
  if (start >= end) return;
  let left = start,
    right = end;
  let pivot = nums[Math.floor((start + end) / 2)];

  // 분할 및 정렬 과정
  while (left <= right) {
    // pivot보다 작은 요소를 찾을 때까지 왼쪽에서 오른쪽으로 이동한다.
    while (left <= right && nums[left] < pivot) {
      left++;
    }
    // pivot보다 큰 요소를 찾을 때까지 오른쪽에서 왼쪽으로 이동한다.
    while (left <= right && nums[right] > pivot) {
      right--;
    }
    // 왼쪽과 오른쪽 포인터가 교차하지 않았다면, 해당 요소들을 교환한다.
    if (left <= right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }

  // 왼쪽 부분 배열과 오른쪽 부분 배열에 대해 재귀적으로 퀵 정렬 수행한다.
  quickSort(nums, start, right);
  quickSort(nums, left, end);
};
