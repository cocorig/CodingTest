//solution: 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

function solution(citations) {
  citations.sort((a, b) => b - a);
  console.log(citations); //[ 6, 5, 3, 1, 0 ]
  let hIndex = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      // 논문의 인용 횟수가 현재 인덱스보다 크거나 같은지 확인
      hIndex = i + 1; // H-Index 후보
    } else {
      break;
    }
  }

  return hIndex;
}
// 논문 5편 중,3번 이상 인용된 논문이 3편 이상이고, 나머지 논문이 3번 이하 인용되었다면 3의 최댓값이 이 과학자의 H-Index이다.
const citations = [3, 0, 6, 1, 5]; //논문의 인용 횟수를 담은 배열
console.log(solution(citations));
/// h-index 계산법
// 1. 인용횟수를 기준으로 내림차순 정렬한다.
// 2. 인용횟수와 논문의 순서가 같거나, 인용횟수가 높을 구간까지의 논문 편수를 구한다.

/*
즉, 인용 횟수를 담은 배열을 내림차순으로 정렬한다. h-index의 갯수를 담을 변수를 선언해주고,배열을 반복하면서 인용횟수(citations[i])와 논문의 순서(i+1)가 같거나, (citations[i] === i + 1) , 논문의 순서(i+1)보다 인용횟수(citations[i])가 더 클 때 (citations[i] > i + 1) hIndex의 값을 1증가 시켜준다. 
*/
