function largestOfFour(arr) {

  var results = [];
  //search each array and put the largest number in each array in to the blank array
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = 0;
    //assign the largest number in each array to a variable
    for (var sb = 0; sb < arr.length; sb++){
      if (arr[n][sb] > largestNumber) {
      largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
