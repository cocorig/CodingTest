function solution(n , k){
  const serviceDrink = Math.floor(n / 10);
  let result = 
  (n * 12000) + (k * 2000) - (serviceDrink * 2000)
  return result;
}