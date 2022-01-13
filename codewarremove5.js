function fakeBin(x){


    let arr = x.split('')
    
     let narr = []
    
    for(let i = 0; i <= arr.length-1; i++){
      
        let num = parseInt(arr[i]);
         
        if(num < 5){
          num = 0
          
        }
      
        else if(num >= 5){
          num = 1
          
        }
      narr.push(num)
      
        
      
    }
    
    let r = narr.join('')
    return r
    
    
    }
    
    console.log(fakeBin("48534568876"))
    
    
    