function position(letter){
    let arr =  "abcdefghijklmnopqrstuvwxyz".split('');
    
      
    for(let i = 0; i <= arr.length-1;i++){
    if(letter == arr[i]){
      let res = arr.indexOf(arr[i])+1
      
      return `Position of alphabet: ${res}`
    }
    }
    }
    
    console.log(position("a"))