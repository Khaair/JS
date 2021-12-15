var arr = [1, 2, 3, 4, 7, 8]

var newarr = arr.filter(function(value){
    return value % 2 === 0
})

console.log(newarr)