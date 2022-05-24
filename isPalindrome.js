function isPalindrome(x) {
    let str1 = x.toLowerCase()
    
    let str2 = str1.split("").reverse().join("");
    
    if(str1==str2){
      return true
    }
    else{
      return false
    }
    }