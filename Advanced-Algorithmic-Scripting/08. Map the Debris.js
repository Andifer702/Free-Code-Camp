function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  var p = Math.PI;
  for (var i = 0; i < arr.length; i++){
    var a = Math.pow(arr[i].avgAlt, 3)/GM;
    newArr.push(a);
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
