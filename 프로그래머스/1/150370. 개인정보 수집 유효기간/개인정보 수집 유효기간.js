function solution(today, terms, privacies) {
    // 입력된 오늘 날짜를 숫자로 변환 (예: "2022.05.19" -> 20220519)
    const todayDate = Number(today.split('.').join(''));

    // 약관 정보를 담을 객체 생성
    let termsObj = {};

    // 약관 정보를 객체에 저장 (예: ["A 6", "B 12", "C 3"] -> { A: 6, B: 12, C: 3 })
    terms.forEach((term) => {
        const [contract, month] = term.split(' ');
        termsObj[contract] = Number(month);
    });

    // 결과를 저장할 배열
    let result = [];

    // 개인정보를 처리하면서 만료일을 계산
    privacies.forEach((privacy, index) => {
        let [date, contract] = privacy.split(' ');

        // 날짜를 연, 월, 일로 분리하고 월에 약관에서 가져온 개월 수를 더함
        let [year, month, day] = date.split('.').map(Number);
        month += termsObj[contract];

        // 월이 12를 넘어갈 경우 연도를 조정
        while (month > 12) {
            year += 1;
            month -= 12;
        }

        // 연, 월, 일을 문자열로 변환하고 자릿수를 맞춤
        year = String(year);
        month = String(month).padStart(2, '0');
        day = String(day).padStart(2, '0');

        // 계산된 날짜를 숫자로 변환 (예: "20220519" -> 20220519)
        const calculatedDate = Number(year + month + day);

        // 만료일이 현재 날짜 이전이면 결과 배열에 추가
        if (calculatedDate <= todayDate) {
            result.push(index + 1);
        }
    });

    return result;
}
