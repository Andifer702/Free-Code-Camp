function spinalCase(str) {
  //convert lower case upper case strings to lowercase whitespace upper case
  str = str.replace (/([a-z])([A-Z])/g, '$1 $2');
  //replace any white spaces or underscore with dash and make the whole string lowercase
  return str.replace(/ |_/g, '-').toLowerCase();
}

spinalCase('thisIsSpinalTap');
