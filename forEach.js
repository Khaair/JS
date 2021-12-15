var arr = [1, 2, 3, 4, 500]
var sum = 0
arr.forEach(function(value, index, arr){

    sum += value
    // console.log(value, index, arr)
})

console.log(sum)