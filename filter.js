function getEvenNumbers(numbersArray){
    return numbersArray.filter((number) => number%2===0);
  }
  
  
  console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));