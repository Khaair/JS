
function countPositivesSumNegatives(input) {
    let arr1 = []
    let arr2 = []
    let arr3 = []

    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i] == 0) {
            arr3.push(input[i])
        }
        else if (input[i] > 0) {
            arr1.push(input[i])

        }
        else if (input[i] < 0) {
            arr2.push(input[i])
        }

    }

    let count = arr1.length
    let sum = arr2.reduce((a, b) => a + b, 0);
    let k = [count, sum]
    
}
    return k

let x = countPositivesSumNegatives([0, 0])

console.log(x)