function highestAndLowest(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }
  
  console.log(highestAndLowest("1 2 3 4"))