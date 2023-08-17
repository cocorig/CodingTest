function solution(before, after) {
const ans =  before.split('').sort().join('') === after.split('').sort().join('') ?  1 : 0
   return ans
}