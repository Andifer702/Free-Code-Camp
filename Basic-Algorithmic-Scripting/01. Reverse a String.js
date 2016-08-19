//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString(str) {
  //split the string into individual characters, reverse the order, then rejoin them
  return str.split('').reverse().join('');
}

reverseString("hello", "");

//Credit to Rafael Rodriguez for reference and help
//rafase282@gmail.com
//http://www.freecodecamp.com/rafase282
//*/
