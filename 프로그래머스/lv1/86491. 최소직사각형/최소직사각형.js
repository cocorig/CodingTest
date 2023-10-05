function solution(sizes) {
  for(let i = 0; i < sizes.length; i++) {
    let w = sizes[i][0];
    let h = sizes[i][1]; 
 

    if(w < h){   

      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    }
 
  }
 

  let maxWidth = Math.max(...sizes.map(size => size[0]));
  let maxHeight = Math.max(...sizes.map(size => size[1]));

  return maxWidth * maxHeight;
 
}