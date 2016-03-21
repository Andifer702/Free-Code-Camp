function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  for (var i = 0; i < arr.length; i+=size) {
    //cuts the array from i to the i + size. i=+size is done so that indexing can be done properly since the slice method does not alter the original array.
   newArr.push(arr.slice(i, i+size));
  }
    
  return newArr;
}
