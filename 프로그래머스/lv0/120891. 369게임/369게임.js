function solution(order) {
  let answer = order.toString().replaceAll(/[^369]/g , '');
  return answer.length;
}