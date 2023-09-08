function solution(s){

  let str = s.toLowerCase();
  const p = str.split('p').length -1;
  const y = str.split('y').length -1;

  if( p === y || 0 ){
    return true;
  }else{
    return false;
  }

}