function smallestCommons(arr) {
  var arra = [];
  var min, max;
  //sorts the array into min max order
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }
  else{
    min = arr[0];
    max = arr[1];
  }
  //function for creating a new array with all the numbers in between the min & max
  function range(min, max) {
        for (var i = min; i <= max; i++) {
            arra.push(i);
        }
        return arra;
  }
  //function for finding the greatest common multiple
  function gcd(a, b)
  { 
	return !b ? a : gcd(b, a % b);
  } 
  //function for finding the least common multiple
  function lcm(a, b) 
  {
	return a * (b / gcd(a,b));
  }
  //function for finding the LCM of all the values of the array
  function lcmArr(arr){
    range(min, max);
    //find the LCM of all the values by comparing each value with the LCM of two previous values
    var ans = arra[0];
    for (var j = 1; j < arra.length; j++){
      ans = lcm(ans, arra[j]);
    }
    return ans;
  }
  return lcmArr(arr);
}

