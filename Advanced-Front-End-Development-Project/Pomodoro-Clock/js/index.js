$breakCount = $('#breakCount');
$sessionCount = $('#sessionCount');

//Control for break session
$('#plus').click(function(){
  $breakCount.text(+$breakCount.text() + 1)
});

$('#minus').click(function(){
 if (+$breakCount.text() > 1){
   $breakCount.text(+$breakCount.text() - 1)}
});

//control for the work session
$('#plus2').click(function(){
  $sessionCount.text(+$sessionCount.text() + 1)
});

$('#minus2').click(function(){
 if (+$sessionCount.text() > 1){
   $sessionCount.text(+$sessionCount.text() - 1)}
});

//function for start button and reset button
var workCD;
var breakCD;

$('#reset').click(function(){
  document.getElementById("start").disabled = false;
  document.getElementById("plus").disabled = false;
  document.getElementById("minus").disabled = false;
  document.getElementById("plus2").disabled = false;
  document.getElementById("minus2").disabled = false;
  document.getElementById("timer").style.color = '#BFBFBF';
  
  clearInterval(workCD);
  clearInterval(breakCD);
  $('#timer').text('00'+':'+'00');
});

$('#start').click(function() {
  
  var time = +$sessionCount.text()*60;
  var breakTime = +$breakCount.text()*60
  document.getElementById("start").disabled = true;
  document.getElementById("plus").disabled = true;
  document.getElementById("minus").disabled = true;
  document.getElementById("plus2").disabled = true;
  document.getElementById("minus2").disabled = true;
  
    workCD = setInterval(function(){
    var second = 1
    if (second > time) {
      
           breakCD = setInterval(function(){
    
      if (second > breakTime) {
        document.getElementById("start").disabled = false;
        clearInterval(breakCD);
        document.getElementById("timer").style.color = 'red';
    }
    else {
      
      breakTime = breakTime - second;
      var breakMinute = (Math.floor(breakTime/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      
      var breakSeconds = (Math.floor(breakTime%60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
 document.getElementById("timer").style.color = "#2E4777"     
 $('#timer').text(breakMinute+':'+breakSeconds);
      
    }
  },1000); 
      clearInterval(workCD);
    }
    else {
      
      time = time - second;
      var minute = (Math.floor(time/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      
      var seconds = (Math.floor(time%60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      
 $('#timer').text(minute+':'+seconds);
      
    }
  },1000);
});

