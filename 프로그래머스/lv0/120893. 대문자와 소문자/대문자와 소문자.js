function solution(my_string) {
    let str = ''
    for(let i = 0; i< my_string.length; i++){
        if(my_string[i] == my_string[i].toUpperCase()){
           str += my_string[i].toLowerCase();
        }else{
            str += my_string[i].toUpperCase();
        }
    }
    return str;
    
}