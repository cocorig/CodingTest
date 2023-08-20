function solution(my_string) {
  let setArr =[...new Set(my_string)] 
   return  setArr.join('');
}