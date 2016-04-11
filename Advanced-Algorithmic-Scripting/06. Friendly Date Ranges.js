function makeFriendlyDates(arr) {
  var begDate = new Date(arr[0].split('-')), //put the array into dates format
      endDate = new Date(arr[1].split('-')),
      begYear = begDate.getFullYear(), //assign separate variables for year,month, date
      endYear = endDate.getFullYear(),
      begMonth = begDate.getMonth(),
      endMonth = endDate.getMonth(),
      begDays = begDate.getUTCDate(),
      endDays = endDate.getUTCDate(),
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  function corDate(n){ //depending on the days, assign appropriate ordinal dates
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
  
  if (begDate.getTime() === endDate.getTime()){ //exact same beginning and end date
    return [months[begMonth] + ' ' + corDate(begDays) + ', ' + begYear];
  }
  
    else if (begMonth === endMonth && begYear === endYear){ //same month, same year
    return [months[begDate.getUTCMonth()] + ' ' + corDate(begDays) ,  corDate(endDays)];
  }
  
  else if (begYear === endYear && begMonth != endMonth) { //same year, different month
    return [months[begMonth] + ' ' + corDate(begDays) + ', ' + begYear, months[endMonth] + ' ' + corDate(endDays)];
  }
  
  else if (endYear - begYear === 1 && begMonth > endMonth) { //starts at current year and then ends within a year
    return [months[begMonth] + ' ' + corDate(begDays), months[endMonth] + ' ' + corDate(endDays)];
  }
  
  else if (endYear - begYear === 1 && begMonth === endMonth && begDays > endDays) {//begins and ends within a year.
    return [months[begMonth] + ' ' + corDate(begDays) + ', ' + begYear, months[endMonth] + ' ' + corDate(endDays)];
  }

  else {//more than 365 days difference
    return [months[begDate.getUTCMonth()] + ' ' + corDate(begDays) + ', ' + begYear, months[endDate.getUTCMonth()] + ' ' + corDate(endDays) + ', ' + endYear];
  }
  
}

makeFriendlyDates(["2022-09-05", "2023-09-05"]);
