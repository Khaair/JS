// var arr =     [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ]
// let narr = []

// for(let i = 0; i <= arr.length-1; i++){
  
//   if(arr[i] == true){
//     narr.push(arr[i])
    
//   }
  
// }

// return narr.length

function countSheeps(arrayOfSheep) {
    let narr = []
  
  for(let i = 0; i <= arrayOfSheep.length-1; i++){
    
    if(arrayOfSheep[i] == true){
      narr.push(arrayOfSheep[i])
      
    }
    
  }
  
  return narr.length
  
  }
  
  console.log(countSheeps([true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ]))