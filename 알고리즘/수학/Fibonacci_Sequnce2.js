function fib(n) {
  if (n === 0) return 0;

  let prev = 0,
    cur = 1,
    temp;

  for (let i = 1; i < n; i++) {
    temp = cur;
    cur = cur + prev;
    prev = temp;
  }

  return cur;
}
console.log(fib(4));

/*
 O(n)
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
*/
