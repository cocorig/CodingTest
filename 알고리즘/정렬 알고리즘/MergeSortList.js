/*
https://www.geeksforgeeks.org/merge-sort-for-linked-list/?ref=header_search
https://dev.to/alisabaj/floyd-s-tortoise-and-hare-algorithm-finding-a-cycle-in-a-linked-list-39af

시간 복잡도 : O(n*log n)
보조 공간 : O(log n)

# mergeSort()
1.연결 리스트의 크기가 1이면 head를 반환합니다.
2.Floyd's Tortoise and Hare Algorithm을 사용하여 중간 지점을 찾습니다.
3.중간 지점 다음에 오는 노드를 head2에 저장합니다(즉, 오른쪽 서브 연결 리스트).
4.중간 노드의 다음을 null로 만듭니다.
5.왼쪽과 오른쪽 서브 연결 리스트에 대해 재귀적으로 mergeSort()를 호출하고 각각의 새로운 head를 저장합니다.
6.merge()에 왼쪽과 오른쪽 서브 연결 리스트의 새로운 head를 인수로 전달하여 병합합니다.
7.병합된 연결 리스트의 최종 head를 반환합니다.

# merge(head1, head2):

1.병합된 리스트를 저장할 포인터인 merged를 사용하고 그 안에 더미 노드를 저장합니다.
2.포인터 temp를 만들고 merged를 할당합니다.
3.head1의 데이터가 head2의 데이터보다 작으면 temp의 다음에 head1을 저장하고 head1을 다음 노드로 이동합니다.
4.그렇지 않으면 temp의 다음에 head2를 저장하고 head2를 다음 노드로 이동합니다.
5.temp를 temp의 다음 노드로 이동합니다.
6.head1이 null이 아니거나 head2가 null이 아닐 때까지 단계 3, 4, 5를 반복합니다.
7.이제 첫 번째 또는 두 번째 연결 리스트의 남은 노드를 병합된 연결 리스트에 추가합니다.
8.merged의 다음을 반환합니다(더미를 무시하고 최종 병합된 연결 리스트의 head를 반환합니다).
 */

// Node 클래스 정의
class Node {
  constructor(val) {
    this.data = val; // 현재 노드의 데이터
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}

// 주어진 연결 리스트를 병합 정렬을 사용하여 정렬하는 함수
function mergeSort(head) {
  // 노드가 하나일 경우 바로 반환
  if (!head || !head.next) return head;
  // 중간 지점 찾기
  let mid = findMid(head);
  let head2 = mid.next; // 중간 노드를 기준으로 리스트를 두 개의 부분 리스트로 나눔
  mid.next = null; // 중간 노드의 다음을 null로 설정하여 리스트를 나눔

  // 왼쪽 부분 리스트와 오른쪽 부분 리스트에 대해 재귀적으로 mergeSort 함수를 호출하여 각 부분을 정렬함
  // 정렬된 두 부분 리스트를 병합하여 최종 정렬된 리스트를 반환함
  return merge(mergeSort(head), mergeSort(head2));
}

// 두 연결 리스트를 병합하는 함수
function merge(head1, head2) {
  let merged = new Node(-1); // 가짜 노드 생성,
  let temp = merged; // 병합된 리스트를 저장할 포인터

  // 두 리스트 중 하나라도 비어있지 않을 때까지 반복
  while (head1 && head2) {
    // 작은 값을 가진 노드를 가리키도록 포인터 이동
    if (head1.data < head2.data) {
      //head1의 데이터가 head2의 데이터보다 작으면
      temp.next = head1; // temp의 다음에 head1을 저장
      head1 = head1.next; // head1을 다음 노드로 이동
    } else {
      temp.next = head2; // temp의 다음에 head2를 저장
      head2 = head2.next; //head2를 다음 노드로 이동
    }
    temp = temp.next;
  }

  // 남은 노드 처리
  // while (head1 != null) {
  //   temp.next = head1;
  //   head1 = head1.next;
  //   temp = temp.next;
  // }
  // while (head2 != null) {
  //   temp.next = head2;
  //   head2 = head2.next;
  //   temp = temp.next;
  // }
  temp.next = head1 || head2;
  return merged.next; // 가짜 노드 다음부터 반환
}

// 빠른 포인터와 느린 포인터를 사용하여 중간 노드 찾는 함수
function findMid(head) {
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 연결 리스트 출력 함수
function printList(head) {
  let result = [];
  while (head != null) {
    result.push(head.data);
    head = head.next;
  }
  return result;
}

// 연결 리스트 생성 및 정렬
let head = new Node(-1);
let temp = head;
temp.next = new Node(5);
temp = temp.next;
temp.next = new Node(3);
temp = temp.next;
temp.next = new Node(4);
temp = temp.next;
temp.next = new Node(0);
temp = temp.next;

//Node {
//   data: 7,
//   next: Node { data: 10, next: Node { data: 5, next: [Node] } }
// }
// 정렬된 연결 리스트 출력
head = mergeSort(head);
console.log(printList(head)); //[ 2, 3, 5, 7, 10, 20 ]
