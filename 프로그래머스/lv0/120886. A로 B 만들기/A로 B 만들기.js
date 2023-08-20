function solution(before, after) {

  const Newbefore = before.split('').sort().join('');
  const Newafter = after.split('').sort().join('');
  console.log(Newbefore , Newafter);
  return Newbefore === Newafter ? 1 : 0;

  }