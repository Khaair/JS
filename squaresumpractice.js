let arr = [1, 2, 3]
let sum = 0
for(let i =0; i <= arr.length-1;i++){
  
  let k = arr[i]*arr[i]
  
   sum = sum + k
  
  
}
console.log(sum)




function squareSum(numbers){


let v = numbers.map(x => x ** 2)


let h = v.reduce(function(a,b) {
  return a + b;
}, 0);
  
  return h
}

console.log((squareSum([])))




let numbers = [2, 4, 6, 8]

let v = numbers.map(x => x * 2)


let h = v.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(h)




const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]