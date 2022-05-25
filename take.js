function take(arr, n) {
  
    let arr2 = []
  if(arr.length==0){
    return []
  }
    else{
      for(let i = 0; i <= n-1; i++){
        if(arr[i]==undefined) break;
      arr2.push(arr[i])
      
  }
    }
    
    return arr2
  }
  
  console.log(take([-3,-4,15,23,-80,23,53,-28,38,1,0,-18,-45,3,56,49,62,-60,-10,-22,32,-37,-39,-66,36,-8], 67))