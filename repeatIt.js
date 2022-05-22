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
