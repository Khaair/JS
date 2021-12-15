// var arr = [2, 3, 5, 6,-2]



// console.log(add)

function addd(arr){
  
  
    var filterr = arr.filter( x => x   > 0)
  
  var add = filterr.reduce((a,b) => a+b)
  
  return add
  }
  
  console.log(addd([2, 3, 5, 6,-2]))
  
  
  // function positiveSum(arr) {
  //   return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  // }
  
  // console.log(positiveSum([2, 3, 5, 6]))
  
  
  