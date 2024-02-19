//분할 정복 알고리즘
//Divide: 더 작은 하위 배열로 나누는 것,Conquer:해결될 때까지 재귀적으로 호출함,Combine : 하위 배열 결합

// 배열을 분할하여 각 부분에서 최댓값과 최솟값을 찾고, 이를 결합하여 전체 배열의 최댓값과 최솟값을 찾는 것이 분할 정복 알고리즘이다.

// 주어진 배열에서 최댓값을 찾는 함수
function DAC_Max(arr, index, length) {
  if (length - 1 == 0) {
    return arr[index];
  }
  if (index >= length - 2) {
    if (arr[index] > arr[index + 1]) return arr[index];
    else return arr[index + 1];
  }

  // 배열에서 최댓값을 찾는 로직
  let max = DAC_Max(arr, index + 1, length);

  if (arr[index] > max) return arr[index];
  else return max;
}

// 주어진 배열에서 최솟값을 찾는 함수
function DAC_Min(arr, index, length) {
  if (length - 1 == 0) {
    return arr[index];
  }
  if (index >= length - 2) {
    if (arr[index] < arr[index + 1]) return arr[index];
    else return arr[index + 1];
  }

  // 배열에서 최솟값을 찾는 로직
  let min = DAC_Min(arr, index + 1, length);

  if (arr[index] < min) return arr[index];
  else return min;
}

// 주어진 배열
const arr = [70, 250, 50, 80, 140, 12, 14];

// 주어진 배열에서 최댓값과 최솟값을 찾음
const max = DAC_Max(arr, 0, arr.length);
const min = DAC_Min(arr, 0, arr.length);

console.log("주어진 배열에서 최솟값은: ", min); //12
console.log("주어진 배열에서 최댓값은: ", max); //250
