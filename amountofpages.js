function amountOfPages(summary){
    let arr = []
  
  
  for(let i =1; i <=arr.length+1 ;i++){
    arr.push(i)
    let str = arr.join("")
  
    if(str.length==summary){
      break;
    }
  }
    
    return arr.pop()
  }
  
  console.log(amountOfPages(1095))
  