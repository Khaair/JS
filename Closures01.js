function temp(){
    let counter = 0
   return  function(){
        counter += 1
    }
}


let r = temp()

r()
r()
r()
console.dir(r)
