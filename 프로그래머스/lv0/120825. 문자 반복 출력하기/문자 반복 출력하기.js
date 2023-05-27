function solution(my_string, n) {
    let str = [ ];
    for(let i = 0; i < my_string.length; i++){
        let a = my_string[i]; //h
        for(j=0; j < n; j++){
            str.push(a) * j
        }
    }
       return str.join('')
    
}