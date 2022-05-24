function countSheeps(arrayOfSheep) {
    arr2 = []
    
    for(let i = 0; i<= arrayOfSheep.length-1;i++){
      if(arrayOfSheep[i]==true){
    arr2.push(arrayOfSheep[i])
      }
    }
      
      return arr2.length
    }