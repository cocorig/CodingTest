solution();
//셀프 넘버가 아닐때 실행=생성자가 있는 숫자
function d(num){  //d(75) = 75+7+5 = 87
    let sum = 0;
    const strNum = String(num);//75를 문자열로 바꿈
    for(let i=0; i<strNum.length; i++){
        sum += +strNum[i]; //7+5=12                              //문자열을 하나씩 뽑아
    }
    return num + sum;   //n을 d(n)의 생성자이기 때문에 d(n)을 통해서 나온 값은 셀프넘버가 아님
    //값 반환:75+12=87
}       

function solution( ){
    //1~10000까지의 숫자를 체크할수 있는 배열을 만들어서 한번이라도 등장햇는지 체크
    const arr = Array(10001).fill(0);
    for(let i =1; i<=10000; i++){
        const ans = d(i);//셀프 넘버가 아니면 ans에 값이 들어감
        if(ans <= 10000){
            arr[ans]++;    //한번도 안나오면 셀프넘버
        } //arr의 배열중 0이면 셀프넘버,1이상이면 셀프넘버가 아님.
    }
    for(let i = 0; i <=10000; i++){
        if(arr[i]===0){
            console.log(i);
        }
    }
}
