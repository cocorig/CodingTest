function solution(array, commands) {
  return commands.map(command => {
      const [start,end, k] = command;
      const sortedArr = array.slice(start -1 , end).sort((a,b)=> a- b);
      return sortedArr[k - 1];
  })
}