function solution(nums) {
    let max =  nums.length / 2 //내가 가질수있는 최대값
    //일단 배열을 중복값제거
    let a = nums.filter((e, index)=>{
         return nums.indexOf(e) === index
    })
    if(max < a.length || max === a.length ){ 
        return max;
    }else{
        
        return a.length;
    
    }
   
}