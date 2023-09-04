// 안전한 지역이 몇 칸 있는지 찾아야함



function solution(board) { 


  const numRows = board.length;
  const numCols = board[0].length;
  const borderLength = numRows * numCols;
  // 1. degenr좌표 구하기
  let dangerCoordinates = [];
    board.forEach((v , i)=>{
    
      let y = i;
      for(let i = 0; i < v.length; i++){
      let x = i;
          if(v[i]=== 1){
          dangerCoordinates.push([x, y]);
          }
      }
    })

    if(borderLength ==dangerCoordinates.length){
      return 0;
    }

    let dengerZone = new Set();
    const denger = [
      [0,  0],
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [-1, 1],
      [0,  1],
      [1,  1],
      [1 , 0]
    ]

    for(let i=0; i < dangerCoordinates.length; i++){
      let x =  dangerCoordinates[i][0];
      let y =  dangerCoordinates[i][1];

      denger.forEach((v)=>{
        // // console.log(x + v[0]) , (y + v[1]);
        // dengerZone.add((x + v[0]) + "," + (y + v[1]));
        let newX = x + v[0];
        let newY = y + v[1];
  
        if (newX >= 0 && newX < numCols && newY >= 0 && newY < numRows) {
          dengerZone.add(newX + "," + newY);
        }
      })

    }
    
    return (borderLength - dengerZone.size);
}


console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));