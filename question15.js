let str = "Hello hello"

let set = new Set();
let words = str.toLocaleLowerCase().split("")

words.forEach((ele)=>{
    set.add(ele);
})
let newstring = Array.from(set).join("");
console.log(newstring)