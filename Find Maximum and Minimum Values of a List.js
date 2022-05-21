var min = function(list){
  
    let res = list.sort((a,b) => a-b)
    
       return res.shift()
    }
    
    var max = function(list){
        
       
    let res = list.sort((a,b) => a-b)
    
       return res.pop()
    }