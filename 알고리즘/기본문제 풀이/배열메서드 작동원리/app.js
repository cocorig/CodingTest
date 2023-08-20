//forEach , map , filter , reduce 메서드 작동원리

// 모두 공통적으로 고차함수 (함수를 매개변수로 넘긴다 => 콜백함수)
let a  = [10,11,12,13,14,15,16];



// 1. forEach (for 반복문 대신 사용)

// 예시 빌트인       함수(필수) , [선택]
// function forEach(predicate , thisArg){ 
//   //  요소를 하나하나 탐색하는 부분
//   for(let i = 0; i < a.length; i++){
//     predicate(a[i] , i) // 콜백함수 호출문
//   }
// }
//predicate가 콜백함수를 받음
// 콜백함수
// function(v , i){
//   console.log(v , i);
// }


a.forEach(function(v , i){
    console.log(v , i , this); // 인자로 만들고있는 콜백함수의 내부 
} , [1,2]);  // 콜백함수 내부의 this는 [1,2]
 //thisArg

//--------------------------------------------------------

 // 2. map (새로운 배열을 생성한다)

//  function map(predicate , thisArg){
//   let list = [];  빈 배열을 만든다
//  무조건 원본배열의 길이만큼 콜백함수를 호출한다
//   for(let i = 0; i < a.length; i++){
//     list.push(predicate(a[i], i))
//   }
//   return list;   콜백함수가 리턴한 값으로 새로운 배열(원본 배열과 길이가 같다)을 생성
//  }

const ans =  a.map(function(v ,i){ 
  if(v % 2 === 0){
    return v;  // 조건에 맞지 않으니까 undefine을 반환
  }
} , [1,2]);
console.log(ans);//[ 10, undefined, 12, undefined, 14, undefined, 16 ]


// 3.filter  (map과 비슷하게 새로운 배열을 생성해서 return 받지만, 원하는 원소 (조건에 맞는 원소만) return 해준다, 원본 배열의 길이 상관없이)
// 콜백함수기 참(true, 1)을 리턴한  원소만 배열에 저장한다.
// 새로운 값을 만들어내는게 아니라 조건에 맞는 원소만 딱 뽑아냄

//  function filter(predicate , thisArg){
//   let list = []; 1. 빈 배열을 만든다
//  2. 하나 하나 배열을 탐색한다

//   for(let i = 0; i < a.length; i++){
      // 콜백함수가 참을 만 배열에 저장
//     if(predicate(a[i] , i)){
//   list.push(a[i])
//      }
//   return list;  
//  }

const answer =  a.filter(function(v ,i){ 
  return v % 2 === 0; // 콜백함수기 참을 리턴했을 때의 원소만 배열에 저장한다.
} , [1,2]);
console.log(answer);//[ 10, undefined, 12, undefined, 14, undefined, 16 ]


// 4. reduce(값을 생성해서 리턴함, 배열을 생성하지 않는다)
// 원봄배열의 합을 구할 때 쓰이고 자주 안쓰임
                                // 초기값
//  function reduce( predicate , val ){

//  1.결과값에  넘어온 값으로 초기화
//   let result = val; 

//  2. 하나 하나 원본 배열을 탐색한다
//   for(let i = 0; i < a.length; i++){

//    result = predicate(result, a[i]); 콜백함수 리턴 값 저장

//    }
//   return result;  
//  }

 
// acc는 누적값  ---> 리턴한 값이 acc로 반환하면서 누적
const answer1 =  a.reduce(function(acc ,v){ 
  return acc + v; // 콜백함수기 참을 리턴했을 때의 원소만 배열에 저장한다.
} , 0 );
console.log(answer1);//[ 10, undefined, 12, undefined, 14, undefined, 16 ]
