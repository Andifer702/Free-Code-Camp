function telephoneCheck(str) {
  // Good luck!
  var regexp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})?[\s\-]?(\d{4})$/g;
  return regexp.test(str);
}



telephoneCheck("1 555)555-5555");
//Credit to Rafael Rodriguez for reference and help
//rafase282@gmail.com
//http://www.freecodecamp.com/rafase282
//*/
