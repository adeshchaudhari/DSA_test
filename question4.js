function remove_dupl(arr){
    const new_arr = []

    arr.foreach(function (element){
        let duplicate = false;
        new_arr.foreach(function(uniqueElement){
            if (element === uniqueElement){
                duplicate = true;
            }
        })
        if (!duplicate){
            new_arr.push(element);
        }
    })

    return new_arr
}
const result = remove_dupl([1,2,3,3,2,2,3231,12,3,21,565,12])

console.log(result)