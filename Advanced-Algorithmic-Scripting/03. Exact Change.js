function checkCashRegister(price, cash, cid) {
  var change;
  var drawerCash = [];
  var ans = [];
  // Here is your change, ma'am.
  cid.reverse();
  change = cash - price;
  
  var denom = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];

  for (var i = 0; i < cid.length; i++){
    drawerCash.push(cid[i][1]);
  }
  
  var totalCash = drawerCash.reduce(add, 0);
    function add(a, b) {
    return a + b;
    }
  
  if (totalCash == change){
    return 'Closed';
  }
  
  for (var j = 0; j < drawerCash.length; j++){
    if (change%denom[j] === 0){
      if (change <= drawerCash[j]){
        cid[j][1] = change;
        ans.push(cid[j]);
        return ans;
      }
      else{
        return 'Insufficient Funds';
      }
    }
    else if (change/denom[j] > 1){
      var bill;
      for (var k = 1; change > cid[j][1]; k++){
        drawerCash[j] = drawerCash[j]- denom[j];
        change = change - denom[j];
        bill = k;
      }
      if (cid[j][1] >= 0){
          cid[j][1] = denom[j]*bill;
          ans.push(cid[j]);
      }
      else {
        return "Insufficient Funds";
      }
    }
  }
  return ans;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
