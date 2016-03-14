function where(collection, source) {
  var arr = [];
  var finalArr = [];
  // What's in a name?
  var keys = Object.keys(source);
  var j = 0;
   for (var i = 0; i < collection.length; i++){
     if (source[keys[j]] == collection[i][keys[j]]){
       var k = j + 1;
       if (source[keys[k]] == collection[i][keys[k]]){
         arr.push(collection[i]);
       }
       }
     }
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
