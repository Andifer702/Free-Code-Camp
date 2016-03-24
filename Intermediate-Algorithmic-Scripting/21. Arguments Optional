function add() {
  var x = arguments[0];
  //function to check if an argument is a number or not
  var checkNumber = function(num){
    if (typeof num != 'number'){
      return undefined;
    }
    else{
      return num;
    }
    };
  //If the function has more than 2 arguments, check both arguments to see if any is undefined and if not, add the two values.
  if (arguments.length > 1){
    if(checkNumber(arguments[0]) === undefined || checkNumber(arguments[1]) === undefined){
       return undefined;
       }
     else{  
     return arguments[0] + arguments[1];
    }
   }
  //if there is only 1 value, check to see if the value is undefined. If not, return a function that checks if the second value is undefined. If not, add the two values together.
  else{
      if(checkNumber(x)){
        return function(num2){
          if (x === undefined || checkNumber(num2) === undefined){
            return undefined;
          }
          else{
            return x + num2;
          }
        };
       }
      }
    }

add("http://bit.ly/IqT6zt")(4);
