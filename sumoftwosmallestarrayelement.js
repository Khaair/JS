function sumTwoSmallestNumbers(numbers) {  
    var sortt = numbers.sort(function(a, b){return a - b});
  
  var ff = [sortt[0] ,sortt[1]]
  var sum = 0;
  for(i=0;i<=ff.length-1;i++){
    sum+=ff[i]
  }
  return sum
  }