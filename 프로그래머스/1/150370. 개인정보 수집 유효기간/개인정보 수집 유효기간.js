function solution(today, terms, privacies) {
    const answer = [];

    const getExpiredDate = (dataString, month) => {
        let [year, mon, day] = dataString.split('.').map(Number);
        mon += month;

        while (mon > 12) {
            mon -= 12;
            year += 1;
        }

        // Adjust day
        const lastDayOfMonth = new Date(year, mon, 0).getDate();
        day = Math.min(day, lastDayOfMonth);

        return [year, mon, day];
    };

    privacies.forEach((privacy, index) => {
        const [data, term] = privacy.split(" ");
        const termPeriod = Number(terms.find(innerTerm => innerTerm.startsWith(term)).split(' ')[1]);

        const [eYear, eMon, eDay] = getExpiredDate(data, termPeriod);
        const [year, mon, day] = today.split('.').map(Number);

        // Convert to date objects for comparison
        const expirationDate = new Date(eYear, eMon - 1, eDay);
        const currentDate = new Date(year, mon - 1, day);

        // Compare dates
        if (currentDate > expirationDate || currentDate.toDateString() === expirationDate.toDateString()) {
            answer.push(index + 1);
        }
    });

    return answer;
}

// 예시
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])); // [1, 3]
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])); // [1, 4, 5]
