function solution(n, lost, reserve) {
    // lost 와 reserve 동시에 있는 학생은 빌려줄수도 없기 때문에 Set을 사용해 중복을 제거
    reserve.sort((a , b) => a - b)
    lost.sort((a , b) => a - b)
    console.log(reserve, lost)
    let reserveSet = new Set(reserve.filter(r => !lost.includes(r))); // reserve - lost
    console.log(reserveSet)/// 빌려줄 수 있음
    let lostSet = new Set(lost.filter(l => !reserve.includes(l)));
    console.log(lostSet) // 진짜 필요함

    // 빌려줄 수 있는 번호 배열 반복   
    for (let student of reserveSet) {
         // 1이면 0, 2에게 빌려줄 수 있음 lostSet에 0,2가 있는지 확인 
        
        if (lostSet.has(student - 1)) { // 왼쪽 번호 있는지 확인
            lostSet.delete(student - 1 ); // 빌려줌 , lostSet에서 삭제, 체육복 얻었으니까
        } else if (lostSet.has(student + 1)) { // 오른쪽 
            lostSet.delete(student + 1);
        } 
     console.log(lostSet.size) 
     
       // 만약 lostSet.size가 0이면 다 체육복 받음 , n을 반환
        // 0이 아니면 n - lostSet.size을 반환
         if(lostSet.size === 0){
            return n;
        }
    }

return  n - lostSet.size;
    
}
