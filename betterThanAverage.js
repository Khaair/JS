function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((a, b) => a + b, 0);
    
    if(sum/classPoints.length<yourPoints){
      return true
    }
    else{
      return false
    }
  }
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))