function truncate(str, num) {
  // if the num is greater than legnth of the str, nothing is truncated
  if ( num >= str.length)
    return str = str;
  //if the num is less than or equal to 3, ... are not counted in str length
  else if (num <= 3)
    return str = str.slice(0,num) + '...';
  //otherwise account for the length of ... when truncating
  else
    return str = str.slice(0, num-3) + '...';
}
