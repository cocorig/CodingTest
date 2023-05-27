function solution(array, height) {
    var answer = 0;
    let cnt= 0;
    array.filter((n)=>{
      if(n > height){
          cnt += 1;
      } 
       
    })
    console.log(cnt)
    return cnt;
}