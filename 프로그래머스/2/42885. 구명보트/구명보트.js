function solution(people, limit) {
    people.sort((a, b) => a - b); 
 	//[50, 70, 80]
    let boat = 0; 
    let small = 0;
     let big = people.length -1 ; // 2
    while( small < big ){
     // small = 0 , big = 2
    //small = 0 , big = 1 
        // small = 0 , big=0
         if(people[small] + people[big]  <= limit){
             //같이 보트탐
             boat++;
             // 둘은 없어짐
             big--; 
             small++; 
         }else{
              big--;
              boat++;
         }
    }
    if(small === big){
         boat++;
    }

    return boat; // 최소 보트 사용 횟수 반환
}

