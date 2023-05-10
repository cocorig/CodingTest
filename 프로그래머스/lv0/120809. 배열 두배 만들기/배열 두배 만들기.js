//1.numbers 배열의 원소를 꺼냄
//2.원소를 꺼내 2배를 한 후 새 배열에 넣어줌-> answer.push()->push눈 몇번?? 배열의 길이 만큼
function solution(numbers) {
    let answer = [];
    for(let i=0; i < numbers.length; i++ ){
        answer.push(numbers[i] * 2);
        console.log(i)
    }

    return answer;
}