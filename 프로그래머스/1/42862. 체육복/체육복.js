function solution(n, lost, reserve) {
    let reserveSet = new Set(reserve.filter(r => !lost.includes(r)));
    let lostSet = new Set(lost.filter(l => !reserve.includes(l)));

    for (let student of reserveSet) {
        if (lostSet.has(student)) {
            lostSet.delete(student);
        } else if (lostSet.has(student - 1)) {
            lostSet.delete(student - 1);
        } else if (lostSet.has(student + 1)) {
            lostSet.delete(student + 1);
        }
    }

    return n - lostSet.size;
}
