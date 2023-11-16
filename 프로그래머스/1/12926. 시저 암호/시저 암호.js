function solution(s, n) {
 
    
return   s.split('').map(char =>{
        if(char === ' ') return ' ';
       const start = (char === char.toUpperCase()) ? 65 : 97;
       const code = char.charCodeAt(0);
        return String.fromCharCode(((code - start + n)% 26)+ start)
        
    }).join('')
 
}