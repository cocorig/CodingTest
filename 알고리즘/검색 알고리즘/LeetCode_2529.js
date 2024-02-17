//2529. Maximum Count of Positive Integer and Negative Integer(sorted in non-decreasing order)
// 오름차 순으로 정렬된 nums배열에서 양의 정수와 음의 정수의 개수 중 최대값을 반환하는 것 , 주어진 배열을 절반으로 쪼개면서 탐색하므로 탐색 범위가 반씩 줄어들게 된다. 따라서 전체 알고리즘의 시간 복잡도는 O(log n)이다.
var maximumCount = function (nums) {
  // 가장 큰 음수의 인덱스와 가장 작은 양수의 인덱스 중 최댓값을 반환
  return Math.max(upper_bound(nums), lower_bound(nums));
};

// 가장 큰 음수의 인덱스를 이진 검색으로 찾는 함수, 가장 큰 n 번째 음수 인덱스를 찾고,개수를 반환 해야하기 때문에 +1 해줌
function upper_bound(nums) {
  if (nums[0] >= 0) return 0; // 배열의 첫 번째 값이 0 이상이면 음수가 없는 것으로 처리
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.ceil((left + right) / 2); //ceil을 사용하는 이유는 더 큰 음수의 인덱스를 찾기 위해 소수점 올림이 필요

    if (nums[mid] < 0) left = mid;
    // 음수이면 왼쪽 영역을 중간 값으로 이동, 최대 음수 인덱스를 찾기위해
    else right = mid - 1; // 양수거나 0이면 오른쪽 영역을 왼쪽으로 더 좁힘
  }
  return left + 1; // 가장 큰 음수의 인덱스를 반환,
}

// 가장 작은 양수의 인덱스를 이진 검색으로 찾는 함수
function lower_bound(nums) {
  if (nums[nums.length - 1] <= 0) return 0; // 배열의 마지막 값이 0 이하이면 양수가 없는 것으로 처리
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2); //더 작은 양수의 인덱스를 찾기 위해 내림이 필요

    if (nums[mid] > 0) right = mid; // 양수이면 왼쪽 영역으로 이동
    else left = mid + 1; // 음수거나 0이면 오른쪽 영역으로 이동
  }

  return nums.length - left; // 가장 작은 양수의 인덱스를 반환 ,
}
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
//2개의 양의 정수와 3개의 음의 정수가 있을때 그 중 최대 개수는 3개이다.
//즉 양의 정수 개수와 음의 정수 개수를 찾아서 큰 수를 반환하면 된다. 각각 함수로 나눠 이진 검색을 사용함
// 즉 주어진 배열이 오름차순으로 정렬되어 있기 때문에 중간값을 기준으로 왼쪽에는 음의 정수, 오른쪽에는 양의 정수가 위치 할 수 있다.따라서 이진 검색을 활용하여 중간값을 찾고, 해당 중간값을 기준으로 음의 정수와 양의 정수의 개수를 파악하는 것이 포인트라고 생각한다.
