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

    
function check(a, x) {
  let arr2 =[]

for(let i = 0; i <=a.length-1;i++){

  if(a[i]==x){
   arr2.push(a[i])
  }
    
  

}
  
      return arr2.join()==x

}

console.log(check(['what', 'a', 'great', 'kata'], 'b'))





let str = "hii"



let arr2 = []



if(typeof(str)=="string"){
arr2.push(str)
let str2 = arr2.join("")


console.log(str.concat(str2))
}
else{
  console.log("Not a string")
}

