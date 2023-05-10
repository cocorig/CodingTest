function solution(array) {
     array.sort(function(a,b){
         return a - b; //배열 오름차순 정열 
     });
 
    var answer = array[Math.floor(array.length / 2)];
    return answer;
}