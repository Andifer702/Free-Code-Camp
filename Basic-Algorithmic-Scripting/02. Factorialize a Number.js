//Return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//Factorials are often represented with the shorthand notation n!

function factorialize(num) {
  var factorial = 1;
  //multiply the number by the factorial then reduce the number by 1 and repeat until number is reduced to zero
  while (num !==0){
    factorial = factorial*num; 
    num--;
  }
  return factorial;
}
