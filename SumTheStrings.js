function sumStr(a,b) {

    if(a.length == 0 && b.length == 0 ){
        return "Empty String"
    }

    else{
        let num1 = parseInt(a);
        let num2 = parseInt(b);
     
       let r = num1 + num2
       return r.toString();
    }

    Or

    function sumStr(a,b) {
        return String(Number(a)+Number(b));
      }

  
 
    
  }
  
  console.log(sumStr("5","3"))