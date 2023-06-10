function solution(sides) { // (더 작은 값 * 2) -1
   
    let max = Math.max(...sides)
    let longindex = sides.indexOf(max); //큰값의 원소의 인덱스를 알기위해
    let shortindex = longindex === 1 ? 0: 1; //long의 반대가 되면됨
    let shortside = sides[shortindex]
    
    let ans = shortside;
    ans += shortside -1;
    
    return (ans)
    
}