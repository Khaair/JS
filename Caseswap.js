function ss(str) {

    let arr1 = []

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == str[i].toUpperCase()) {
            arr1.push(str[i].toLowerCase())

        }
        else {
            arr1.push(str[i].toUpperCase())
        }
    }

    return arr1


}

let xx = ss("KaTaloGe")

let cc = xx.join("")
console.log(cc)