function solution(number, k) {
    const stack = [];

    for (let i = 0; i < number.length; i++) {
        const current = number[i];

     
        while (stack.length > 0 && stack[stack.length - 1] < current && k > 0) {
            stack.pop();
            k--;
        }

        stack.push(current);
    }


    stack.splice(stack.length - k, k);

    return stack.join('');
}
