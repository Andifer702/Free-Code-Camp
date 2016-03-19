function drop(arr, func) {
  // Drop them elements.
  var newArr = [];
  var falseArr = [];
  //use the value in the array as the argument in function to see if it is true.
  for (var i = 0; i < arr.length; i++){
    if (func(arr[i]) === true){
      //put first value where function is true and rest of the array
      newArr = arr.slice(i, arr.length); 
      return newArr;
    }
    else {
      falseArr.push(arr[i]);
    }
  }
  return newArr;
}
