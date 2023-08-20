function solution(arr){  

  //중복 항목이 자동으로 제거되고 고유한 값의 배열이 생성.
 const mySet = [...new Set(arr)];

 for(let v of mySet){
  console.log(v)
 }

// true 인것만 모아서 배열로 반환
 let answer =  arr.filter((v, i) =>{

    return i === arr.indexOf(v);
    // 조건에 만족하는 v만 배열로 반환
  })

 for(let v of answer){
  console.log( v)
 }

 }

let arr=["good", "time", "good", "time", "student"];
solution(arr);
