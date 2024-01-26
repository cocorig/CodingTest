function solution(s) {
  const stack = [];
  for (let x of s) {
    if (x === ")") {
      // 닫기 괄호일때 열기 괄호 전까지 pop
      while (stack.pop() !== "("); //stack.pop()한게  '('일때까지 반복 pop
    } else {
      stack.push(x);
    }
    console.log(stack);
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
//답: EFLM
// 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
