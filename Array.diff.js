function arrayDiff(a, b) {
    let arr3 = [];
  for (let i = 0; i <= a.length - 1; i++) {
   if(b.includes(a[i])==false){
     arr3.push(a[i])
   }
  }
return arr3
}  

console.log(arrayDiff([1,2,2], [2]))