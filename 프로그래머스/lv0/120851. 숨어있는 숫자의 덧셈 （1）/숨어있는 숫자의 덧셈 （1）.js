function solution(my_string) {
    let sum = 0;
    const list = /[^0-9]/g; //숫자가 아닌 문자를 의미하는패턴
    const result = my_string.replace(list, "");
    const str =  Array.from(result)
    //console.log(str)
    str.map((n)=>{
        sum += Number(n);
    })
    return sum;
}