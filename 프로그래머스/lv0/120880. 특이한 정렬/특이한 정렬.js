function solution(numlist, n) {


    
let num =  numlist.sort((a,b)=>{ 
      return  Math.abs(a - n) - Math.abs(b - n)  || b - a   
    })

return (num)
}