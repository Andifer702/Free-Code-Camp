function steamroller(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  flatten(arr);
  
  function flatten (array){
    
    for (var i = 0; i < array.length; i++){
      //if the value in the array is not an array, push into newArr
      if (!Array.isArray(array[i])){
        newArr.push(array[i]);
      }
      else{
        //recursive function to account for nested arrays
        flatten(array[i]);
      }
    }
  }
 
  return newArr;
}
