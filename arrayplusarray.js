// var arr1 = [1,3]
// var arr2 = [2,4]
// var k,l
// var res = arr1.concat(arr2)
// var result = res.reduce((a, b) => a + b);

// console.log(result)

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }
  
  
  var ru = arrayPlusArray([1,2],[3,4])
  
  console.log(ru)