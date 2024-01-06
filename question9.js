function missingnumber(arr){

    const n = arr.length + 1;
    const sum = (n* (n+1))/2;
    const actualsum = arr.reduce((sum,num)=> sum + num, 0);
    return sum - actualsum;
}

const result = missingnumber([1,2,3,5,6,7])
console.log(result)