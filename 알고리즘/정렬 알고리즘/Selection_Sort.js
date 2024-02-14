//O(N 2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let swap = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = swap;
    }
    console.log(`${i}회전: ${arr}`);
  }
  return arr;
}
console.log(selectionSort([8, 20, -2, 4, -6]));
//[ -6, -2, 4, 8, 20 ]
