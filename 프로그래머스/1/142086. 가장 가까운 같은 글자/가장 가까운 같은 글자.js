function solution(s) {
    const answer = new Array(s.length).fill(-1);
    const lastIndex = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastIndex[char] !== undefined) {
            answer[i] = i - lastIndex[char];
        }
        
        lastIndex[char] = i;
    }

    return answer;
}
