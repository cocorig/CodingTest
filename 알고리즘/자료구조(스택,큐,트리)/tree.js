//트리(tree)는 여러 데이터가 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용
//      hello
//      / | \
// world and  fun
//             |
//         javascript!

class Node {
  // 트리 안에 들어있는 각 항목
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

const tree = new Node("hello", [
  new Node("world"),
  new Node("and"),
  new Node("fun", [new Node("javascript!")]),
]);

function traverse(node) {
  // console.log(node);
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

traverse(tree);
// hello world and fun javascript!

//  Tree
// Node {
//   content: 'hello',
//   children: [
//     Node { content: 'world', children: [] },
//     Node { content: 'and', children: [] },
//     Node { content: 'fun', children: [Array] }
//   ]
// }
// Node { content: 'world', children: [] }
// Node { content: 'and', children: [] }
// Node {
//   content: 'fun',
//   children: [ Node { content: 'javascript!', children: [] } ]
// }
// Node { content: 'javascript!', children: [] }
// 루트에서 시작하여 한 노드의 자식들을 모두 방문한 후에 다음 자식으로 이동하는 방식
