function multipleOfIndex(array) {
  
    let arr2 = []
  for(let i =0; i <= array.length-1;i++){
    
    if(array[i]%i==0){
    arr2.push(array[i])
    }
  }
    
    return arr2
    
  }