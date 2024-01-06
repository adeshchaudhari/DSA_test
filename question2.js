function calculatesum(num){
    let sum = 0;

    for(i=0; i<num.length; i++){
        sum += num[i]
    }

    return sum
}

const result = calculatesum([1,2,3,5]);
console.log(result)