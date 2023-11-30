const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



solution(input[0]);

function solution(str) {
    let obj ={};//각각 문자가 몇번씩 등장했는지 저장해주는 객체
    for(let i=0; i<str.length; i++){

        let nowChar = str[i].toUpperCase(); //M
        if(obj[nowChar]){
            obj[nowChar]++; //만약 객체에 N의 값이 이미 등장했었다면 +1증가
        }else{
            obj[nowChar]=1;
        }
    }
    let max = -1; //최대값 저장
    let maxChar ='';
    let isDuplicated = false; //onj[el]
    for( const el in obj){   //obj의 키값,onj[el]= 1,4,4,1
        if (obj[el]> max){  //{ M: 1, I: 4, S: 4, P: 1 }
            max = obj[el]; // el은 문자
            maxChar =el;
            isDuplicated = false; //중복아님
        }else if( obj[el]===max){//현재 검사하는 키값이 최대값의 키값과 동일하면 중복이 된거때문에 
            isDuplicated =true; //중복임
        }
    }
    if(isDuplicated){   //만약 중복이면 ?출력
        console.log('?');
    }else{    //아니면 키값의 문자 출력
        console.log(maxChar);
    }



}