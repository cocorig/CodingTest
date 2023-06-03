
function solution(my_string) {
    const result =[];
    const  num =  my_string.replace(/[^0-9]/g, "");
    let arr = num.split('')
   
    for(let i =0; i<arr.length; i++){
        result.push(Number(arr[i]));
    }
    return(result.sort())
    

}
