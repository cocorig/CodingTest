// 개인정보의 만료일을 계산하는 함수 , 복잡한 로직을 따로 함수로 빼서 씀
function getExpiredDate(dataString, month) {
    // 주어진 날짜 문자열을 숫자로 변환하여 분리
    let [year, mon, day] = dataString.split('.').map(Number);
    
    // 주어진 개월 수를 현재 월에 더함
    mon += month;

    // 월이 12를 넘어갈 경우 연도를 조정
    while (mon > 12) {
        mon -= 12;
        year += 1;
    }

    // 해당 월의 마지막 날을 계산
    const lastDayOfMonth = new Date(year, mon, 0).getDate();
    
    // 만료일(day)를 해당 월의 마지막 날 또는 주어진 일(day) 중 작은 값으로 조정
    day = Math.min(day, lastDayOfMonth);

    // 조정된 연도, 월, 일을 배열로 반환
    return [year, mon, day];
}

// 주어진 약관과 개인정보를 통해 만료된 개인정보를 찾는 함수
function solution(today, terms, privacies) {
    // 결과를 저장할 배열
    const answer = [];

    // 개인정보 배열을 순회하면서 처리
    privacies.forEach((privacy, index) => {
        // 개인정보 문자열을 날짜와 약관으로 분리
        const [data, term] = privacy.split(" ");
        
        // 약관에서 유효기간을 찾아 숫자로 변환
        const termPeriod = Number(terms.find(innerTerm => innerTerm.startsWith(term)).split(' ')[1]);

        // 만료일을 계산
        const [eYear, eMon, eDay] = getExpiredDate(data, termPeriod);
        // 현재 날짜를 계산
        const [year, mon, day] = today.split('.').map(Number);

        // 만료일과 현재 날짜를 비교하여 만료된 경우 배열에 추가
        const expirationDate = new Date(eYear, eMon - 1, eDay);
        const currentDate = new Date(year, mon - 1, day);

        if (currentDate > expirationDate || currentDate.toDateString() === expirationDate.toDateString()) {
            answer.push(index + 1);
        }
    });

    // 만료된 개인정보의 번호를 반환
    return answer;
}
