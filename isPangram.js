function isPangram(string) {
  let str1 = string.toLowerCase();

  let arr = str1.split("");

  let str2 = "abcdefghijklmnopqrstuvwxyz";

  let arr2 = str2.split("");

  let arr3 = [];
  for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr.includes(arr2[i]) == false) {
      arr3.push(i);
    }
  }

  if (arr3.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPangram("This is not a pangram."));
