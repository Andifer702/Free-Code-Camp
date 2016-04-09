function permAlone(str) {
  
  function heap(string) { //function for creating an array of permutation.
  var arr = string.split(''),   // Turns the input string into a letter array.
    permutations = [];      
 
  function swap(a, b) {     // This function will simply swap positions a and b inside the 
                            //input array.
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
 
  function gen(n) {           // Heap's algorithm in javaScript
    if (n === 1) {            
      permutations.push(arr.join('')); 
    } else {
      for (var i = 0; i != n; i++) {
        gen(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
 
  gen(arr.length);
  return permutations;
}
  var consecutive = /(.)\1/; //regex for matching 2 consecutive letters. 
  
  return heap(str).filter(function(perm){ //filter heaps to return the number of permutataions
    return !consecutive.test(perm);       //that fit the requirement.
  }).length;
}

permAlone('aab');

//Credit to Gorka Hernandez @ GH Blog for help and guidance
//www.gorkahernandez.com
