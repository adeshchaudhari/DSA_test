function palindrome(x){
    if (x<0) {
        return false;
    }

    const original = x;
    let reverse = 0;

    while (x>0){
        reverse = reverse * 10 + x%10;
        x = parseInt(x/10);
    }

    return reverse == original
}

const result = palindrome(213);
console.log(result)