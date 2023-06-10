function solution(spell, dic) {
       let ans = []
    
    dic.forEach((n) => {//sod
        let cnt = 0;
        
        spell.forEach((item)=>{//p
            if(n.includes(item)){
                cnt += 1;
            }
        })
        
        if(cnt === spell.length){
            ans.push(n)
        }
      
    })
 
       return ans.length === 0 ? 2: 1;
    }

