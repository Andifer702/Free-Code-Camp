function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var j;
  var curItem = [];
  var newItem = [];
  
  //push the names of the current inventory item into a new array
  for (var i = 0; i < arr1.length; i++){
    curItem.push(arr1[i][1]);
  }
  //push the names of the new inventory items into a new array
  for ( i = 0; i < arr2.length; i++){
    newItem.push(arr2[i][1]);
  }
  
  //update the quantity of existing items in the curInv
  for ( i = 0; i < arr1.length; i++){    
    for (j = 0; j < arr2.length; j++){
      if(arr2[j][1].indexOf(arr1[i][1]) > -1){
      arr1[i][0] = arr1[i][0] + arr2[j][0];
      }    
    }
  }
  
  //push new items into curInv
  newItem.map(function(item){
    if (curItem.indexOf(item) == -1){
      var index = newItem.indexOf(item);
      arr1.push(arr2[index]);
    }
  });
  
  //sort the array alphabetically
  arr1.sort(function(currentItem, nextItem){
    return currentItem[1]  > nextItem[1] ? 1 : -1;
  });
  
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ;
