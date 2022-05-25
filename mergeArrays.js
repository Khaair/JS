function mergeArrays(arr1, arr2) {
  
    let res = arr1.concat(arr2)
    let res2 = res.sort((a,b) => a-b)
    return [...new Set(res2)]
  
    
  }
  
  console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))