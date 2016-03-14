function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  for (var i = 0; i < arr1.length; i++){
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
      
    }
    else {
      i = i;
    }
  }
  for (i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1) {
      newArr.push(arr2[i]);
    }
    else {
      i = i;
    }
  }
  
  
  return newArr;
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
