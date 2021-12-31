function validatePIN (pin) {
    if(pin >=1 || pin >=0) {
    if(pin.length == 6 || pin.length == 4 ){
     return true
    }
    
    else{
      return false
    }
    }
      else{
        return false
      }
    }
    