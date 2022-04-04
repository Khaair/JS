function aa(a, b, op) {

    let n1 = a.length
    let n2 = b.length

    
    if (op == "+") {
        return (a + b)

    }
    else if (op == "-") {
        return (a - b)

    }
    else if (op == "*") {
        return (a * b)

    }

    else if (op == "/") {
        return (a / b)

    }

    else if (op == "//") {
        return (a % b)
         
         }

}




console.log(aa(5, 3, "//"))