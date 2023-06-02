function solution(my_string, num1, num2) {
    const strArr = my_string.split('');
    
    const num1str =  my_string[num1]; //e
    const num2str =  my_string[num2]; //l
    
    strArr.splice(num1 , 1, num2str);
    strArr.splice(num2 , 1 , num1str);
    
    return strArr.join('');
}