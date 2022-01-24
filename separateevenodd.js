let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let arr1  = []

let arr2  = []


for(let i = 0; i <= arr.length-1;i++){
  
  if(arr[i] % 2 == 1){
    arr1.push(arr[i])
    
  }
  else{
      arr2.push(arr[i])
  }
}

console.log(arr1)

console.log(arr2)