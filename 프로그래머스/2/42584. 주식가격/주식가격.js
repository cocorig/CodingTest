function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0); 

    const stack = []; 

    for (let i = 0; i < n; i++) {
       
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop(); 
            answer[top] = i - top;
        }
        stack.push(i); 
    }

    // 주식가격이 떨어지지 않은 기간이 끝나지 않은 경우
    while (stack.length > 0) {
        const top = stack.pop(); // 이전 주식가격의 인덱스를 꺼내옴
        answer[top] = n - 1 - top; // 주식가격이 떨어지지 않은 기간을 끝까지로 설정
    }

    return answer;
}

