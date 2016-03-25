var unit = 'metric';

var getCoord = function (data){
  var appid = '44db6a862fba0b067b1930da0d769e98';
  var lat = data.lat;
  var lon = data.lon;
  var city = data.city;
  var state = data.regionName;
  url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon +
    '&appid=' + appid + '&units=metric';


  var getWeather = function(data) {
    var temp = Math.round(data.main.temp);
    var tempUnit = 'C';
    var windUnit = 'meters/sec';
    var description = data.weather[0].description;
    var code = data.weather[0].icon;
    var wspeed = data.wind.speed;
    
    $('#convertF').click(function(){
      if (unit === 'metric') {
        unit = 'imperial';
        tempUnit = 'F';
        temp = Math.round(temp*1.8 + 32);
        var html = '<img src="http://openweathermap.org/img/w/' + code +
      '.png" alt="Weather Icon">' + '<p> ' + temp + ' ' + tempUnit + ', ' +
      description + '<br> Wind Speed: ' + wspeed + " " +  windUnit + '</p><p>' + city + ', ' + state +
      '</p>';
        $('#weather').html(html);
        }; 
    });
    
    $('#convertC').click(function(){
      if (unit === 'imperial') {
        unit = 'metric';
        tempUnit = 'C';
        temp = Math.round((temp - 32)/1.8);
        var html = '<img src="http://openweathermap.org/img/w/' + code +
      '.png" alt="Weather Icon">' + '<p> ' + temp + ' ' + tempUnit + ', ' +
      description + '<br> Wind Speed: ' + wspeed + " " +  windUnit + '</p><p>' + city + ', ' + state +
      '</p>';
        $('#weather').html(html);
        }; 
    });
    
    var html = '<img src="http://openweathermap.org/img/w/' + code +
      '.png" alt="Weather Icon">' + '<p> ' + temp + ' ' + tempUnit + ', ' +
      description + '<br> Wind Speed: ' + wspeed + " " +  windUnit + '</p><p>' + city + ', ' + state +
      '</p>';

    // Displays the custom HTML
    $('#weather').html(html);
  };
$.getJSON(url, getWeather);
};

$.getJSON('http://ip-api.com/json', getCoord);


