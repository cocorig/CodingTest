function solution(park, routes) {
    let pos = [0,0];
    const dict = {
        E : [0,1],
        W : [0,-1],
        S : [1, 0],
        N : [-1,0]
    };
    for(let i=0; i< park.length; i++){
        const find =  park[i].indexOf('S');
        if(find > -1){
            pos = [i, find];
            break;
        }
    }
    routes.forEach((route, index)=>{
        const [op, n] = route.split(' ');
        const temp = [...pos];
        let no =  false;
        
        for(let i = 0; i < n; i++){
            temp[0] += dict[op][0];
            temp[1] += dict[op][1];
            
            if((temp[0]<0)|| (temp[0]>park.length -1)||
              (temp[1]<0)|| (temp[1]>park[0].length -1)){
                no = true;
                break;
            }
            if(park[temp[0]][temp[1]]=== 'X'){
                no =  true;
                break;
            }
        }
        if(!no){
            pos = temp;
        }
    })
    return pos;
}