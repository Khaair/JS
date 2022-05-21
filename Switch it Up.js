
function switchItUp(number){
    if(number==1){
      return "One"
      
    }
      
    else if(number==2){
      return "Two"
    
      
    }
    
    else if(number==3){
       return "Three"
    
    }
    
    else if(number==4){
      return "Four"
    
    }
    
    else if(number==5){
        return "Five"
    
    }
    
    else if(number==6){
        return "Six"
    
    }
    
    else if(number==7){
        return "Seven"
    
    }
    
      
    else if(number==8){
        return "Eight"
    
    }
    
    else if(number==9){
        return "Nine"
    
    }
      
    else if(number==0){
        return "Zero"
    
    }

    
    function unusualFive() {
        let five = 'Five!';
        return five.length;
        }
      
}


function getChar(c){
    return String.fromCharCode(c); // --> 'a'
  }


  function noBoringZeros(n) {
    let str = n.toString().split('');
    for (let i = 0; i <= str.length; i++){
      if(str[str.length-1] == '0'){
      str.pop(str[str.length-1]);
  
    }
      
  
  }
  
  return +str.join("")
  }
  
  console.log(noBoringZeros(960000))