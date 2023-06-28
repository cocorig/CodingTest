function solution(keyinput, board) {
    
    let ans = [0,0];
    
    const xConst = Math.floor(board[0]/2);
    const yConst = Math.floor(board[1]/2);
    
    keyinput.forEach((item)=>{
        if( item === 'right' && ans[0]< xConst){
            ans[0] += 1;
        }
        if(item === 'left' && ans[0] > -xConst){
            ans[0] -= 1;
        }if(item === 'up' && ans[1] < yConst){
            ans[1] += 1;
        }if(item === 'down' && ans[1] > -yConst){
            ans[1] -= 1;
        }
        
    });
    
    return ans;
}