function solution(my_string, letter){
  let ans = '';
  for(let i=0; i < my_string.length; i++){
   if(my_string[i] !== letter){
     ans += my_string[i];
   }
  }
  return ans;
}

