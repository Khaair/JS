// var num = 1246789
// var str = num.toString()
// var arr = str.split("")
// var arrr = []

// for(var i = 0; i <=arr.length-1;i++){
  
 
//   var m = parseInt( arr[i])

  
// var e = arrr.push(m)

  
// }

// var x =arrr.sort(function(a, b){return b - a});

// for(var j = 0; j <= x.length-1; j++){
//     var bb = x[j]
//     console.log(bb)
    
// }

function descendingOrder(n){
    var s = n.split('')
  var sortt = s.sort()
  var rev = sortt.reverse()
  var joinn = rev.join('')
  var intt = parseInt((joinn))
    return intt
  }
  
  console.log(descendingOrder("3342453")

