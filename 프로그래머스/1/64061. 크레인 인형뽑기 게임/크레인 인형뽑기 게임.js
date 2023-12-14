function solution(board, moves) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < moves.length; i++) {
    let index = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][index] != 0) {
        if (stack[stack.length - 1] === board[j][index]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][index]);
        }
        board[j][index] = 0;
        break;
      }
    }
  }
  return count;
}