// var str = "The quick brown fox jumped over the lazy dog"

// var arr = str.split(' ')
// var r = arr.reduce(myFunc)

// function myFunc(longestword,currentword){
//  var rr = currentword.length < longestword.length ? currentword : longestword
//  return rr
// }
  

// console.log(r)

function findShort(s){
    var arr = s.split(' ')
  var r = arr.reduce(myFunc)
  
  function myFunc(longestword,currentword){
   var rr = currentword.length < longestword.length ? currentword : longestword
   return rr
  }
    return r.length
  }
  
  console.log(findShort("The quick brown fox jumped over the lazy dog"))