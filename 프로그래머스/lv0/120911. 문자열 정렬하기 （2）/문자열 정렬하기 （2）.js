function solution(my_string) {
    
    let low = my_string.toLowerCase();
    let arr = low.split('')
    return (arr.sort().join(''))
}