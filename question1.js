var isPalindrome = function(x) {
    pal = x.toString().split('').reverse().join('')
    let newstring = x.toString()
    return(pal===newstring)
    
};
let result = isPalindrome(121)
console.log(result)