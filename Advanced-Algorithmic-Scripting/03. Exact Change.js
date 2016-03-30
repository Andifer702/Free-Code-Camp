function checkCashRegister(price, cash, cid) {
  var change;
  var ans = [];
  // Here is your change, ma'am.
  change = cash - price;
  var p = cid[0];
  var n = cid[1];
  var d = cid[2];
  var q = cid[3];
  var gw = cid[4];
  var al = cid[5];
  var jm = cid[6];
  var aj = cid[7];
  var bf = cid[8];
  var denom = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
