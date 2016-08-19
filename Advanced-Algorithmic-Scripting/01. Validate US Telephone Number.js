//Return true if the passed string is a valid US phone number.
//The user may fill out the form field any way they choose as long as it is a valid US number. 
//The following are examples of valid formats for US numbers (refer to the tests below for other variants)
//555-555-5555 (555)555-5555 (555) 555-5555 555 555 5555 5555555555 1 555 555 5555


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
