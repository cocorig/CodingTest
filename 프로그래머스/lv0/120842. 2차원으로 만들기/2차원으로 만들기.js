function solution(num_list, n) {
    let ans = [];
    for(let i =0; i< num_list.length; i +=n){
        const oneArr =  num_list.slice(i,i+n);
        
        ans.push(oneArr);
    }
    return ans;
}