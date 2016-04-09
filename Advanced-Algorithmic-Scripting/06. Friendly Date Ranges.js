function makeFriendlyDates(arr) {
  var begDate = new Date(arr[0].split('-')),
      endDate = new Date(arr[1].split('-'));
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  if (begDate.getTime() === endDate.getTime()){
    return [months[begDate.getMonth()] + ' ' + begDate.getDate() + 'th' + "," + ' ' + begDate.getUTCFullYear()];
  }
  
  else if (begDate.getMonth() === endDate.getMonth() && begDate.getFullYear() === endDate.getFullYear()){
    return [months[begDate.getUTCMonth()] + ' ' + begDate.getUTCDate() + 'st' ,  endDate.getUTCDate() + 'th'];
  }
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
