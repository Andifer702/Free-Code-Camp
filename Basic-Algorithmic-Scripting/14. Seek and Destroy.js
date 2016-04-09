function destroyer(arr) {
  //turns the argument into an array
  var args = Array.prototype.slice.call(arguments);
  //separate 2nd argument on its own
  args.splice(0, 1);
  
  //from the array, keep only values that does not appear on args array.
  return arr.filter(function(element){
    return args.indexOf(element) === -1;
  });
}
//Credit to Rafael Rodriguez for reference and help
//rafase282@gmail.com
//http://www.freecodecamp.com/rafase282
//*/
