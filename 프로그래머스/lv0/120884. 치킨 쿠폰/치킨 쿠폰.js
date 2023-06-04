function solution(chicken) {
    let service = 0; //서비스 치킨
    let ch = chicken; //현재 쿠폰수 =  치킨수
    while(ch > 9){ //false일때 빠져나감, true일때 반복
    service += Math.floor(ch / 10);// 10
    ch =  Math.floor((ch / 10) + (ch % 10));
        
        
    }
    return (service)
    
}