
//홀수인 자연수를 골라 합을 구함
//홀수중 최솟값

    const arr= [12,77,38,41,53,92,85];
    let sum = 0;
    let min = 101;
    for(let i = 0; i < arr.length;  i++){
        if(arr[i] % 2 !== 0){ //홀수를 골라
            
            sum += arr[i]
            if(arr[i] < min){
                min =  arr[i]
            } 
    }
        
    }
    console.log(sum)
    console.log(min)