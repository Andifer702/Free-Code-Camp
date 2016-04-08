function makeFriendlyDates(arr) {
  var begDate = new Date(arr[0].split('-')),
      endDate = new Date(arr[1].split('-'));
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  if (begDate == endDate){
    return [months[begDate.getUTCMonth()] + ' ' + begDate.getUTCDate() + 'th' + "," + ' ' + begDate.getUTCFullYear()];
  }
  return begDate;
 
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]);
