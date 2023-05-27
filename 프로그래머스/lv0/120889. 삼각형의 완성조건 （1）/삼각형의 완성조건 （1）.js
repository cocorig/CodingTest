function solution(sides) {
    
    console.log(sides.sort());
    const max =  sides[2];
    const sum =  sides[0] + sides[1];

    if(max < sum){
        return 1;
    }else{
        return 2;
     }
    
}