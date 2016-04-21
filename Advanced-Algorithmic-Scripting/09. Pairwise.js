function pairwise(arr, arg) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){ //first loop to check the first element
    for(var j = i+1; j < arr.length; j++){ // second loop to check against the first element
      if(arr[i] + arr[j] == arg){          
        sum = sum + i + j;        //if the sum is equal to the arg, add the indices together
        arr[i] = arr[j] = NaN;    // convert the number to NaN to avoid being reused.
      }
    }
  }

  return sum;
}

pairwise([1,4,2,3,0,5], 7);
