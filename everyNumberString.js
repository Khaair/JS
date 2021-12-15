var s = 3212
var num = s.toString()


var newArr = num.split("")
var mapp = newArr.map(function(val){
  return val * val
})

var joinn = mapp.join('')

var number = parseInt(joinn)

console.log(number)

