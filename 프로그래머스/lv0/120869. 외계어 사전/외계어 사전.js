function solution(spell, dic) {
    //접근방식: dix배열의 원소 하나에 대하여 spell에 검사.
    //만약 spell의 원소가 dix에 포함한다면 cnt 증가
    //cnt 와 spell의 길이가 같다면 dic에 단어가 존재하는것
    //조합한 단어 n을 배열에 넣어주고, 배열에 n이 있다면 1, 없으면 2 반환.
    //forEach로 단어를 하나하나 검사해서 포함할때 개수를 세야함
    //**개수가 spell과 똑같다는건 dix에 한번씩 나온 spell단어가 있다는것!
//        let ans = []
    
//     dic.forEach((n) => { //dzx
//         let cnt = 0;
        
//         spell.forEach((item)=>{ //z,d,x
//             if(n.includes(item)){
//                 cnt += 1;
//             }
//         })
        
//         if(cnt === spell.length){
//             ans.push(n)
//         }
      
//     })
 
//        return ans.length === 0 ? 2: 1;
    
    
   // -------------다른 풀이
    
    //filter은 true인것만 골라서 반환. every는 배열의 모든 원소가 주어진 조건을 만족하는지 검사 -> 모든요소가 조건을 만족하면 treu, 조건을 하나라도 만족하지 않는다면 false
   return dic.filter(v => spell.every( c => v.includes(c))).length ? 1 : 2; // 배열의 길이가 1 이상이면 1, 아니면 2
    }

