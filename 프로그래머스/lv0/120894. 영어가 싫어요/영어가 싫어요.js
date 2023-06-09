function solution(numbers) {
    const numArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let ans;
    numArr.forEach((item , index)=>{
       numbers =  numbers.split(item).join(String(index)); // itme기준으로 나눠짐
        //console.log(ans)
    }) //item기준으로 나눈 그 자리에 join으로 index넣어줌
    return Number(numbers)
}