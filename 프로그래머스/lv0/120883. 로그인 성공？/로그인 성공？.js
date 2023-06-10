function solution(id_pw, db) {

    

 
    for(let i = 0; i < db.length; i++){
      
       if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]){//둘다 같을 경우
           return 'login';
       }
       if(id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]){//비번만 틀릴때
           return 'wrong pw'
    }
        
}
    return 'fail';
}