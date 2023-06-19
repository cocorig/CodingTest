function solution(common) {
    const compare1 = common[1] - common[0];
    const compare2 = common[2] - common[1];
    
    return compare1 === compare2 ? common.at(-1) + compare1 : common.at(-1) * (common[1] / common[0])
 }