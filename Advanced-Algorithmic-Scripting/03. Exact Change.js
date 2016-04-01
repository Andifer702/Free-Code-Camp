function checkCashRegister(price, cash, cid) {
  var change;
  var drawerCash = [];
  var ans = [];
  // Here is your change, ma'am.
  //reverse the order of cash in drawer to start giving change from largest denomination
  cid.reverse();
  change = cash - price;
  
  //set an array for single denominations
  var denom = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  //push the amount of cash in drawer into it's own array to simplify
  for (var i = 0; i < cid.length; i++){
    drawerCash.push(cid[i][1]);
  }
  
  //if the amount of total cash is equal to the amount of change, return Closed
  var totalCash = drawerCash.reduce(add, 0);
    function add(a, b) {
    return a + b;
    }
  
  if (totalCash == change){
    return 'Closed';
  }
  
  //starting from largest denomination, check if change is divisible
  for (var j = 0; j < drawerCash.length; j++){
    if (change/denom[j] >= 1){
      var bill;
      // if the change is divisible by a denomination 
      //keep subtracting the change from cash in drawer until it is no longer divisible 
      //Or there are no more cash in the drawer.
      for (var k = 1; change/denom[j] >= 1 && drawerCash[j] > 0; k++){
        drawerCash[j] = drawerCash[j] - denom[j];
        change = (change- denom[j]).toFixed(2);
        bill = k;
      }
      //update the cid value to the amount of change that needs to be given out 
      //then push the value to the ans along with the currency
      if (cid[j][1] >= denom[j]*bill){
          cid[j][1] = denom[j]*bill;
          ans.push(cid[j]);
      }
      //if there is less currency than needed in the drawer, return 'Insufficient Funds'
      else {
        return "Insufficient Funds";
      }
    }
  }
  return ans;
}

//change = 96.74 drawerCash [100, 60, 20, 55, 90, 4.25, 3.10, 2.05, 1.01] 
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
