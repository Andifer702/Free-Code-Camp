function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  var p = Math.PI;

  for (var prop in arr){  
    //assign orbitalPeriod as a new property with its value
     arr[prop].orbitalPeriod = Math.round((2*p)*Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3)/GM));
    // delete avgAlt property
    delete arr[prop].avgAlt;
  }
  return arr;
}
