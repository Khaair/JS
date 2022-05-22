var repeatIt = function (str, n) {
  let arr2 = [];

  if (typeof str !== "string") {
    return "Not a string";
  } else {
    let str2;
    for (let i = 1; i <= n; i++) {
      arr2.push(str);
      str2 = arr2.join("");
    }
    return str2;
  }
};










let str = "The greatest victory is that which requires no battle"

let arr = str.split(" ")

let arr2 = []
for(let i = 0; i  <= arr.length-1;i++){

arr2.unshift(arr[i])
}

  console.log(arr2.join(" "))



//  s.split("").reverse().join("");

  

