function generateHashtag (str) {
  
    let a = str.replaceAll(" ", "");
  var b = "#";
  var position = 0;
  var output = [a.slice(0, position), b, a.slice(position)].join('');
  
  
  
  if(str.length == 0 || output.length > 148){
    return 0
  }
  else if(output.length > 0 || output.length < 140 ){
   return output
  }
  }
  console.log(generateHashtag ("Hello worled"))
  
  
  
  
  
  
  // let str = "aasacacdacsvgrth ythjykinkoiikibj46yh yth5vg5ggt44g Read more about strings in our JavaScript Strings Tutorial. Read more about the length property in our JavaScript String length Reference.";
  // let a = str.replaceAll(" ", "");
  // var b = "#";
  // var position = 0;
  // var output = [a.slice(0, position), b, a.slice(position)].join('');
  
  
  
  // if(str.length == 0 || output.length > 148){
  //   console.log(0);
  // }
  // else if(output.length > 0 || output.length < 140 ){
  //   console.log(output);
  // }
  