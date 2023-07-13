function solution(s){         

    let answers = '';
    for(let item of s ){
        // if(item ===  item.toLowerCase()){
        //     answers += item.toUpperCase();
        // }else{
        //     answers += item;
        // }
        let num = item.charCodeAt();
        //소문자이면 
        if(num >= 97 && num <= 122){
            answers += String.fromCharCode(num -32);
        }else{
            answers += item;
        }

    }
    console.log(answers)
}

let str="ItisTimeToStudyaaaa";
console.log(solution(str));

//a => A로 바꾸려면 97 - 65 = 32
//b => B 98-66 = 32

//String.fromCharCode()
// String.fromCharCode(65, 66, 67);  // "ABC"
// String.fromCharCode(0x2014)       // "—"
// String.fromCharCode(0x12014)      // 숫자 '1'은 무시해서 "—"
