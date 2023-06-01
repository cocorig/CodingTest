function solution(emergency) {
    //내림차순으로 정렬
    const emr =  [...emergency].sort((a,b)=>b-a);
    //진료순위를 기록할 배열
    let rankArr =  new Array(emergency.length).fill(0);
    let cnt = 1;//진료순위
    for(let i=0; i< emergency.length; i++){
        //원래배열의 index를 구한다.
        let index = emergency.indexOf(emr[i]);//1
        rankArr.splice(index,1, cnt);
        
        cnt++;
    }
    return rankArr;
}