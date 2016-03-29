function mutation(arr) {
  //convert both words in the array to lower case
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  //check each letters of the 2nd word to see if it appears on the first word
  for (var i = 0; i < arr[1].length; i++) {
   if (arr[0].indexOf(arr[1][i]) == -1)
      return false;
  }
  
  return true;
}
