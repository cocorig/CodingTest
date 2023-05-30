function solution(rsp) {
    const str = [];
    
    for(let i = 0; i < rsp.length; i++){
       
        if(rsp[i] == 2){
            str.push(0);
        }else if(rsp[i] == 0){
            str.push(5);
        }else if(rsp[i] == 5){
            str.push(2)
        }
       
    }
    
    return str.join('');
}