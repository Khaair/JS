

function sameCase(a, b){
    if(typeof(a) ===typeof(b)){
    if(a.toUpperCase()==a && b.toUpperCase()==b || a.toLowerCase()==a && b.toLowerCase()==b || a.length==0 || b.length==0){
    return 1
  }
  else{
      return 0
  
  }
  
  }
  
  if(typeof(a) !==typeof(b)){
    return -1
  
  }
  }
  
  console.log(sameCase('','K'))