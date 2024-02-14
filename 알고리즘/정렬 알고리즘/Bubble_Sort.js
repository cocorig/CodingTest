// O(n^2)
function bubbleSort(arr) {
  let swapped; //배열이 정렬되었는지 여부
  //배열이 정렬될 때까지 반복
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //  [-6, -2, 4, 8, 20]
