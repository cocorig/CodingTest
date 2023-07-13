function solution(s){         
    let answer = 0;
    for(let item of s){
        // let num = item.charCodeAt();
        // if(num >= 65 && num <= 90){
        //     answer++
        // }
        if (item === item.toUpperCase()){
            answer++;
        }      
    
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));

//item.toUpperCase()- > 원래 item자체를 변형하지않는다.
//item.charCodeAt() -> 문자의 아스키코드를 반환한다. 
// 대문자 : 65(A) ~ 90(Z) , 소문자 : 97(a) ~ 122(z)