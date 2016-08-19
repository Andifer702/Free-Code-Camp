//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

//Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
//For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


function sym(args) {
  args = Array.prototype.slice.call(arguments);
 
  
  var getDiff = function(arr1, arr2){
    var result = [];
    //compare the items in first array with the second array
    for(var i = 0; i < arr1.length; i++){
      var item = arr1[i];
      if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0){
        result.push(item);
      }
    }
    //compare the items in the second array with the first array and the result
    for (var j = 0; j<arr2.length; j++){
      var item2 = arr2[j];
      if(arr1.indexOf(item2) < 0 && result.indexOf(item2) < 0){
        result.push(item2);
      }
    }
    return result;
  };
  //use reduce method to compare the arrays sequentially
  return args.reduce(getDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
