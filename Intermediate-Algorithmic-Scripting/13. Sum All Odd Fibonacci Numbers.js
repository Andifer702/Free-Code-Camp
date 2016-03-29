function sumFibs(num) {
  var prevNum = 0;
  var curNum = 1;
  var total = 0;
  while (curNum <= num){
    //if current number is an odd number, add to total
    if (curNum % 2 !== 0) {
      total += curNum;
    }
    var added = prevNum + curNum; //assign variable for the next number in the sequence
    prevNum = curNum; //current number is pushed back as previous number
    curNum = added;
  }
  return total;
}
