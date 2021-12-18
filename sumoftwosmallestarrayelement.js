function addBinary(a,b) {
    var sum = a+b
    var tt = (sum >>> 0).toString(2)
    return tt
  
  }