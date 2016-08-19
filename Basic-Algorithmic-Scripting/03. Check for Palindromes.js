//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  // simplify the str to all lower case and special characters removed
  var strippedStr = str.toLowerCase().replace(/\W|_/g, ''); 
  var reversedStr = strippedStr.split("").reverse().join("");
  
  return reversedStr === strippedStr;
}

