function solution(array, n) {
    array.sort((a,b)=> a-b);
    //console.log(array)
    let arr =[]
    let a = 0;
    let b = 0;
    for(let i = 0; i< array.length; i++){
       arr.push(Math.abs(n - array[i]))
       a =  Math.min(...arr) //가장 작은값
       b = arr.indexOf(a) //최소값이 담긴 index를 찾아라 
       
    }
    return (array[b])
}     
