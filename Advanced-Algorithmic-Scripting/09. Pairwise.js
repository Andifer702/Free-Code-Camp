function pairwise(arr, arg) {
  var pairs = [];
  var origArr = arr;
  for (var i = 0; i < arr.length; i++){
    for(var j = 1; j < arr.length; j++){
      if(arr[i] + arr[j] == arg){
        pairs.push(arr[i], arr[j]);
      }
    }
  }
  return pairs;
}

pairwise([1,4,2,3,0,5], 7);
