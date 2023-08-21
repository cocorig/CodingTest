
function solution(my_str ,  n){
let arr = my_str.split("");
let ans = [ ];
while(arr.length > 0){
 ans.push(arr.splice(0, n).join("")); 
}
return ans;
}