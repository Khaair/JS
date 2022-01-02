function squareSum(numbers){
    let sum = 0
    for(let i =0; i <= numbers.length-1;i++){
      
      let k = numbers[i]*numbers[i]
      
       sum = sum + k
      
      
    }
      
      return sum;
    }