function translate(str) {
  var vowel = ['a','e','i','o','u'];
  
  for (var i = 0; i < vowel.length; i++){
    if (str[0] == vowel[i]){
      return str + 'way'; //if word begins with a vowel, add way
    }
  }
  if (vowel.indexOf(str[1]) == -1){
    return str.substr(2) + str[0] + str[1] + 'ay'; //if the second letter is also a consonant move both to the end
  }
  else{
    return str.substr(1) + str[0] + 'ay';}
}

translate("california");
