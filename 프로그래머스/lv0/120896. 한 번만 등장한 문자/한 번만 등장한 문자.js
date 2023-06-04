function solution(s) {
    let ans = [];
    let list  = s.split('');
    list.forEach((item) =>{
        if(list.indexOf(item) === list.lastIndexOf(item)){
            ans.push(item)
        }
    })
    return(ans.sort().join(''))
}