function solution(my_string) {
   let arr = my_string.split(' ');
    console.log(arr)
   let numOne = Number(arr[0]);
   // console.log(numOne)
   for(let i = 1; i< arr.length; i++){
 
       if(arr[i] === '+' ){
           numOne +=  Number(arr[i+1])
   
       }else if(arr[i] === '-'){
           numOne -=  Number(arr[i+1])
       }else{
           continue;
       }

   }

    return numOne;
}