function solution(my_string, letter) {
    let n;
    let str = '';
    for(let i=0; i < my_string.length; i++){
        if(my_string[i] !== letter){
           str += my_string[i];
        }
        
    }
    return str;
}