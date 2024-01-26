function solution(progresses, speeds) {
    var answer = [];

    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    while (days.length > 0) {
        let count = 1;
        let task = days.shift();
        
        while (days[0] <= task) {
            count++;
            days.shift();
        }
        
        answer.push(count);
    }
    
    return answer;
}
