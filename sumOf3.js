function getSum(a,b){
    let count = 0;
    if (a == b) return a;
    if(a < b){
      for (; a <= b; a++){
        count += a;
      }
    } else if (a > b){
        for(; b <= a; b++){
          count += b;
        }
    }
    return count;
  }

  

// function getSum( a,b )
// {
//     if(a != b){
//      var sum  = a+b
//      return sum
//    }
  
//   else{
//     return a;
//   }
// }

// console.log(getSum(-532,149))