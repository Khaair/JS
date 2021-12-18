var countBits = function(n) {
    var bin = n.toString(2)
  var count = (bin. match(/1/g) || []).length
  
  return count
  };