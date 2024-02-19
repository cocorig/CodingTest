// //O(N 2)
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       let swap = arr[minIndex];
//       arr[minIndex] = arr[i];
//       arr[i] = swap;
//     }
//     console.log(`${i}회전: ${arr}`);
//   }
//   return arr;
// }

// 배열에서 두 요소의 위치를 교환하는 함수
function swap(arr, xp, yp) {
  let temp = arr[xp]; // xp 위치의 값 저장
  arr[xp] = arr[yp]; // xp 위치의 값에 yp 위치의 값 할당
  arr[yp] = temp; // yp 위치의 값에 임시 저장한 값 할당
}

// 선택 정렬 알고리즘을 사용하여 배열을 정렬하는 함수
function selectionSort(arr) {
  let n = arr.length;
  // 배열의 각 요소에 대해 반복
  // i를 배열의 길이보다 작은 값으로 초기화하고, 1씩 증가하며 반복
  for (let i = 0; i < n - 1; i++) {
    // 정렬되지 않은 부분 배열에서 최소값의 인덱스를 찾음
    let min_idx = i; // 현재 인덱스를 최소값의 인덱스로 설정
    for (let j = i + 1; j < n; j++) {
      // 현재 인덱스(i) 이후의 요소들 중에서 최소값을 찾음
      if (arr[j] < arr[min_idx]) {
        min_idx = j; // 최소값의 인덱스 업데이트
      }
    }

    // 최소값의 인덱스와 현재 인덱스(i)를 교환하여 최소값을 현재 인덱스(i) 위치로 이동
    swap(arr, min_idx, i);
  }
}

let arr = [8, 20, -2, 4, -6];
selectionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
