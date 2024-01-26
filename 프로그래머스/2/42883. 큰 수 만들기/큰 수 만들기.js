function solution(number, k) {
    let answer = '';
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        while (count < k && answer[answer.length - 1] < number[i]) {
            answer = answer.slice(0, -1);
            count++;
        }
        answer += number[i];
    }

    return answer.slice(0, number.length - k);
}
