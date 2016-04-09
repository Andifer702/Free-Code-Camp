function convert(str) {
  // &colon;&rpar;
  var char = str.split('');
  for (var i = 0; i < char.length; i++){
    //check each character in the string for special characters and convert to HTML entities
    switch (char[i]){ 
      case '&':
        char[i] = '&amp;';
        break;
      case '<':
        char[i] = '&lt;';
        break;
      case '>':
        char[i] = '&gt;';
        break;
      case '"':
        char[i] = '&quot;';
        break;
      case "'":
        char[i] = "&apos;";
        break;
    }
    str = char.join('');
  }
  return str;
}

convert("Hamburgers < Pizza < Tacos");
//Credit to Rafael Rodriguez for reference and help
//rafase282@gmail.com
//http://www.freecodecamp.com/rafase282
//*/
