function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let arr3 = []
  for(let i = 0; i <= birds.length-1;i++){
   if(!geese.includes(birds[i])){
     arr3.push(birds[i])
   }
  }
    
  return arr3
  
  };
  
  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
  