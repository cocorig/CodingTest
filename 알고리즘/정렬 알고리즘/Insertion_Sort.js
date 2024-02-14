//삽입 정렬 O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > numberToInsert) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = numberToInsert;
    console.log(`${i}회전: ${arr}`);
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr); //  [-6, -2, 4, 8, 20]
