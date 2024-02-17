var isPalindrome = function (head) {
  // 포인터 초기화
  let slow = head,
    fast = head,
    prev,
    temp;

  // 두 배 빠른 fast와 함께 중간 지점까지 slow를 이동
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);

  // 연결 리스트의 두 번째 절반을 뒤집음
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow)
    (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);

  // 첫 번째와 뒤집힌 두 번째 절반의 값 비교
  (fast = head), (slow = prev);
  while (slow)
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);

  return true;
};
