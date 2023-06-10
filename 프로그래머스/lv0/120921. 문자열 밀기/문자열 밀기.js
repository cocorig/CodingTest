function solution(A, B) {

    let arr = A.split('') 

    for(let i = 1; i < arr.length; i++){ //그냥 반복횟수로
        if( A === B){ // 똑같을때
            return 0;
        }else { 
            
            arr.unshift(arr.pop());//arr의 끝 원소를 arr의 첫번재로 옮겨          
            if(arr.join('') === B){
                return i;
            } 
        } 
    }
    return -1; // 아무것도 없을떼
}
   
