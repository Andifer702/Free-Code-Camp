function convert(num) {
  var ans = '';
  var int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (var i = 0; i <= int.length; i++){
    while (int[i] <= num){
      num = num - int[i];
      ans += roman[i];
    }
  }
 return ans;
}

convert(36);
