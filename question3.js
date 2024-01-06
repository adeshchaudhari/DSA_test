function reversearray(arr){
    const reversed = [];

    for(let i = arr.length-1; i>=0;i--){
        reversed.push(arr[i]);
    }

    return reversed
}

const result = reversearray([1,2,3,4,5,6,7])
console.log(result)