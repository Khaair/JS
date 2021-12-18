function digital_root(n) {
  

    var arr = n.split("")
    
    
    
    
    var sum = 0;
    for(var i = 0; i <= arr.length-1 ; i++){
      
      sum += parseInt(arr[i]) 
      
    }
    var sum1 = sum
    var numToSeparate = sum1;
    
    var arrayOfDigits = Array.from(String(numToSeparate), Number);
    
    var summ = 0;
    for(var i = 0; i <= arrayOfDigits.length-1 ; i++){
      
      summ += parseInt(arrayOfDigits[i]) 
      
     
      
    }
       return summ
    }
    
    console.log(digital_root("12345"))