function fearNotLetter(str) {
  var first = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) == first + 1){ //check to see if Unicode value of the next letter is sequential
      first = first + 1; //if it is sequential, increase the value of the first
    }
    else {
      var mis = first + 1; 
      return String.fromCharCode(mis);//return the missing letter
    }
  }
  return undefined;
}

fearNotLetter("abce");
