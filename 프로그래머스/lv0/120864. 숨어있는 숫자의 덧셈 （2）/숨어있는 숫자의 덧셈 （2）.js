function solution(my_string) {
     
   let numbers = my_string.match(/\d+/g);
    if(numbers ===  null){
        return 0;
    }
    let ans =  numbers.reduce((sum , num)=> sum + parseInt(num),0);
    return ans;
}