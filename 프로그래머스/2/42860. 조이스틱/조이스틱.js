function solution(name) {
    let answer = 0;
    const ASCII_A = 'A'.charCodeAt();
    const ASCII_Z_PLUS_ONE = 'Z'.charCodeAt() + 1; 

 
    const calculateMove = (char) => {
        const charCode = char.charCodeAt();
        return Math.min(charCode - ASCII_A, ASCII_Z_PLUS_ONE - charCode);
    }

    const chars = name.split('').map((c) => calculateMove(c));
    let minMove = name.length - 1;

    chars.forEach((move, idx) => {
        answer += move;

        let cursor = idx + 1;
        while (cursor < chars.length && chars[cursor] === 0) cursor++;

        minMove = Math.min(
            minMove,
            idx * 2 + chars.length - cursor, // 정방향으로 전진
            idx + 2 * (chars.length - cursor) // 뒤로 돌아가기
        );
    });

    return answer + minMove;
}
