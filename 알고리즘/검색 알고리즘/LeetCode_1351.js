//1351. Count Negative Numbers in a Sorted Matrix,Runtime: 54 ms
var countNegatives = function (grid) {
  let count = 0;
  const m = grid.length; // 4
  const n = grid[0].length; //4
  let r = 0;
  let c = n - 1; // 3

  while (r < m && c >= 0) {
    //c = -1 , r = 3 , m = 4
    if (grid[r][c] < 0) {
      //
      count += m - r;
      c--; // 왼쪽 열로 이동
    } else {
      r++; // 다음 행으로 이동
    }
  }
  return count;
};
// var countNegatives = function (grid) {
//   return grid.flat().filter((e) => e < 0).length;
// }; //Runtime: 74 ms
const grid1 = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid1)); // 8
