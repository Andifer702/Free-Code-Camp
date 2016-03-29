function rot13(str) { // LBH QVQ VG!
  str.split('');
  var arr = [];
  for (var i = 0; i < str.length; i++){
    arr.push(String.charCodeAt(str[i]));
  }
  for (var j = 0; j < arr.length; j++){
    if (arr[j] > 64 && arr[j] <= 77){
      arr[j] = String.fromCharCode(arr[j]+13);
   }
    else if (arr[j] > 77){
      arr[j] = String.fromCharCode(arr[j]-13);
    }
    else{
      arr[j] = String.fromCharCode(arr[j]);
    }
  }
  return arr.join("");
}
