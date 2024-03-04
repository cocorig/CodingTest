function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 0) {
    // 재귀호출 종료조건
    return;
  }
  // 1. n-1개의 디스크를 보조 기둥(usingRod)으로 옮긴다.
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(n + "번째 디스크를 " + fromRod + "에서 " + toRod + "으로 이동");

  //2. 가장 큰 디스크를 목표 기둥으로 옮긴다.
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
//3개의 디스크를 A 기둥에서 C 기둥으로 옮기는 경우
console.log(towerOfHanoi(3, "A", "C", "B"));
/*
1번째 디스크를 A에서 C으로 이동
2번째 디스크를 A에서 B으로 이동
1번째 디스크를 C에서 B으로 이동
3번째 디스크를 A에서 C으로 이동
1번째 디스크를 B에서 A으로 이동
2번째 디스크를 B에서 C으로 이동
1번째 디스크를 A에서 C으로 이동
*/
//시간복잡도:O(2^n)
//보조공간:O(N), 함수 호출 스택 공간
