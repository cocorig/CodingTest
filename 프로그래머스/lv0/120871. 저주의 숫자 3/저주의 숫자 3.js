function solution(n){
  const arr = [];
  for(let i=1; arr.length < n; i++){
    if( i.toString().split('').includes('3') || i % 3 === 0 ){
      continue;
    }else{
      arr.push(i)
    }
  }
 return arr[n - 1];
}