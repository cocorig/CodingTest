function solution(order) {
    let answer = (''+ order).replaceAll(/[^369]/g,'');
    return answer.length;
}