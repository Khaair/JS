function capitalizeWord(word) {
    let arr = word.split("")
  
  arr.unshift(arr.shift().toUpperCase())
    return arr.join('')
  }