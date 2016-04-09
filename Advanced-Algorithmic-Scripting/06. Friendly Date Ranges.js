function makeFriendlyDates(arr) {
  var begDate = new Date(arr[0].split('-')),
      endDate = new Date(arr[1].split('-')),
      begYear = begDate.getFullYear(),
      endYear = endDate.getFullYear(),
      begMonth = begDate.getMonth(),
      endMonth = endDate.getMonth(),
      begDays = begDate.getUTCDate(),
      endDays = endDate.getUTCDate(),
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  function corDate(n){
    if (n === 1 || n === 21 || n === 31){
      return n + 'st';
    }
    else if (n === 2 || n === 22){
        return  n + 'nd';
        }
    else if (n === 3 || n === 23){
      return  n + 'rd';
    }
    else {
      return n + 'th';
    }
  }
  
  if (begDate.getTime() === endDate.getTime()){
    return [months[begMonth] + ' ' + corDate(begDays) + "," + ' ' + begYear];
  }
  
  else if (begMonth === endMonth && begYear === endYear){
    return [months[begDate.getUTCMonth()] + ' ' + corDate(begDays) ,  corDate(endDays)];
  }
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
