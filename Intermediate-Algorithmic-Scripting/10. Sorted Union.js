
function unite(arr1, arr2, arr3) {
  for (var i = 1; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++){
      if (arr1.indexOf(arguments[i][j]) == -1){ //starting from second array, find missing number from first array
        arr1.push(arguments[i][j]); //push the missing value into the first array
    }
  }
  }
  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
