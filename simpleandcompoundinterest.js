function interest(P,r,n) {

    let arr = []
    
    let u = P*(1+r*n)
    arr.push(Math.floor(u))
    
    let k =1+(r/1)
    let x = Math.pow(k, 1*n);
    let res = x*P
    arr.push(Math.floor(res))
    
    return arr
    
    }
    
    console.log(interest(100,0.1,1))