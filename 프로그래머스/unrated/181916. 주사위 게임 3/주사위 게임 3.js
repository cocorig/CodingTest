function solution(a, b, c, d) {
    const dices = [a,b,c,d]
    const num = dices.reduce((acc, cur)=>{
        acc[cur] = acc[cur] ?? 0
        acc[cur]++
        return acc
    },{})
    const val = Object.values(num)
    const key = Object.keys(num)
    const count = Math.max(...val)
    switch(count){
        case 4:
            return a*1111
        case 3:{
            const threekey = key.find((a)=>num[a] === 3);                 
            const onekey = key.find((a)=> num[a] === 1);
            return (10 * Number(threekey) + Number(onekey))**2
        }    
        case 2:{
                if(key.length === 2){
                    if(a === b) return(a+c)* Math.abs(a-c)      
                    return (a+b)* Math.abs(a-b)
                }
                    else{
                        return key.reduce((acc, cur)=> num[cur]===1 ? acc*cur : acc,1)
                    }
            }
                default: {
                    return Math.min(a,b,c,d)
                }
    }
            return num
}