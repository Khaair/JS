let arr = ["Ryan", "Kieran", "Mark","kabi","kamal"]

let arr1 = []

for(let i = 0; i <= arr.length-1; i++){
   if(arr[i].length == 4){
    arr1.push(arr[i])
   }
}

return arr1

console.log(arr1)