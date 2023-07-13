function solution(arr){     
      //최솟값 구할때 가장 큰 수로 초기화해놓는다.바로 min = arr[0]으로 초기화해도 된다.
    // let answer, min = Number.MAX_SAFE_INTEGER;
    // 1 번째 방법
    // for(let i=0; i < arr.length; i++){
    //   if(arr[i] < min ){
    //     min = arr[i];
    //   }
    //   answer = min;
    // }
    let answer =  Math.min(...arr);
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
// 2번째 방법
//Math.main(인자로만 받음, 배열을 바로 쓰면 NaN)
//틀린예시  Math.min(arr);
//전개 연산자를 써야한다!!! 인자를 펼쳐주게 -> ...arr ->  (a[0],a[2],a[3]...)


// 3번째 방법
// Math.min.apply(this에 컨츠롤할 객체를 넣어줌 , 배열)
//Math.min.apply(null , arr)