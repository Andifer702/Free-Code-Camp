function sumAll(arr) {
  arr = arr.sort(function(a, b){
    return a-b;
  });
  var total = [];
  for (var i = arr[0]; i <= arr[1];) {
    total.push(i);
    i = i + 1;
  }
  return total.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
  });
}

sumAll([1, 4]);
