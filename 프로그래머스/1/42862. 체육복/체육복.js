function solution(n, lost, reserve) {
    const students = {};

    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    }

    for (let i = 0; i < lost.length; i++) {
        students[lost[i]]--;
    }

    for (let i = 0; i < reserve.length; i++) {
        students[reserve[i]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i - 1]--;
                students[i]++;
            } else if (students[i + 1] === 2) {
                students[i + 1]--;
                students[i]++;
            }
        }
    }

    return Object.values(students).filter(val => val > 0).length;
}
