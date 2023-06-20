function solution(numbers, k) {
// 첫 번째 사람이 공을 갖고있다.
    let ansIndex = 1;
    //마지막 공을 던질 사람을 찾기위해 k-1번까지 반복, 다른 사람을 건너뛰도록 +2를함.
    for(let i =0; i < k-1; i++){
        
        ansIndex +=2;
        // 마지막 번호를 넘어가는 경우 처음 사람에게 공이 전달되도록 배열의 크기만큼 뺀다.
        if(ansIndex > numbers.length){
            ansIndex -= numbers.length;
        }
    }
    return ansIndex ;
}