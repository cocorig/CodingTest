function solution(numbers) {
    const sumSet = new Set(); // 중복제거를 위해 사용함
    numbers.forEach((number , index)=>{
    console.log(number , index)
      numbers.slice(index + 1).forEach(nextNum =>{
          sumSet.add(number + nextNum);
      })
})
return [...sumSet].sort((a , b)=> a - b)
}