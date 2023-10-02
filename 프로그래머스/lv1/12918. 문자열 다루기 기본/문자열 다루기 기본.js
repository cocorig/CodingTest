function solution(s) {
    const regExp = /[a-zA-Z]/g;
  if((s.length ===  4 ||s.length ===  6 ) && !regExp.test(s)){
      return true;
  }else{
      return false;
  }
}