function findOutlier(integers){
    let oddArr =[];
    let evenArr = [];
  
    for(let i = 0; i< integers.length; i++){
      if(integers[i] % 2 === 0){
        evenArr.push(integers[i]);
      }else{
        oddArr.push(integers[i]);
      }
    }
  
    if(evenArr.length == 1){
      return evenArr[0];
    }else{
      return oddArr[0];
    }
  }
  
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let arr = [2, 4, 0, 100, 4, 11, 2602, 36]
  
  // for(i = 0; i <= arr.length-1 ; i++){
    
  //   if(arr[i] % 2 == 1){
  //     console.log(arr[i])
  //   }
    
  //   else{
  //      console.log(arr[i])
  //   }
    
  
  // }