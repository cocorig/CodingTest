function solution(dots) {
    
    dots.sort((a,b) => a[0] - b[0]);// index가 0인 부분을 비교해서 정렬
    console.log(dots)
    const h = Math.abs(dots[0][1] - dots[1][1]);
    const w = Math.abs(dots[0][0] - dots[2][0]);   
    
    return h * w;
}