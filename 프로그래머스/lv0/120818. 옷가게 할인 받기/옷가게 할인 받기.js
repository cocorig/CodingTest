function solution(price) {
    if(price >= 500000 ){ //5%할인
      return Math.floor(price * 0.8);
    }
    if(price >= 300000){ //10%할인
       return Math.floor(price * 0.9);
    }
    if(price >= 100000){ //20%할인
        return Math.floor(price * 0.95);  
    }
   return price;
}