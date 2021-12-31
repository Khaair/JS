

function solution(number){
  
    if(number > 0){
    sum = 0;
    for(let i = 1; i < number;i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum = sum + i
    
    }
  }
      return sum
  }
  else{
    return 0
  }
  }
  
  
  
  console.log(solution(10))