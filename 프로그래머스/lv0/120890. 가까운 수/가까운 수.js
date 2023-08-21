function solution(array, n) {
  let arr = []
  array.sort((a,b)=> a - b);
  for(let i=0; i< array.length; i++){
  arr.push(Math.abs(n - array[i])) ; 
} //arr = [ 17, 10, 8 ] -> n에 각 원소를 뺀 값이 들어있는 배열
// 제일 작은 수를 min변수에 담음
let min  = Math.min(...arr);  // 8
// min값의 인덱스가 기본배열의 가까운 수가 들어있는 원소자리이기 때문에 인덱스를 찾음
let indx =  arr.indexOf(min)
return array[indx];
}     