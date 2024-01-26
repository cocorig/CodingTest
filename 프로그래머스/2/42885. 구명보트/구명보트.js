function solution(people, limit) {
    people.sort((a, b) => a - b); 
 	//[50, 70, 80]
    let boat = 0; 
    let small = 0;
     let big = people.length -1 ; // 2
    while( small <= big ){
            
         if(people[small] + people[big]  <= limit){
          
             small++; 
         }
              big--;
              boat++;
       
    }
  
    return boat; // 최소 보트 사용 횟수 반환
}

