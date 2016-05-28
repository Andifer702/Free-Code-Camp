$(document).ready(function() {
  var eq = 'x';
  var operand = ['*', "/", '+', '-', '%'];
  
  //check if the input has been already evaluated. If so, number entries will start a new entry, others will add on to exsisting.
  function newEntry(){
    if (eq === 'o'){
      $('#box').val('');
      eq = 'x'
    }
  };
  
  //button inputs
  $('#7').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '7')
  });

  $('#8').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '8')
  });

  $('#9').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '9')
  });

  $('#mult').click(function() {
    $('#box').val($('#box').val() + '*')
    eq = 'x'
  });

  $('#divide').click(function() {
    $('#box').val($('#box').val() + '/')
    eq = 'x'
  });

  $('#4').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '4')
  });

  $('#5').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '5')
  });

  $('#6').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '6')
  });

  $('#add').click(function() {
    $('#box').val($('#box').val() + '+')
    eq = 'x'
  });

  $('#minus').click(function() {
    $('#box').val($('#box').val() + '-')
    eq = 'x'
  });

  $('#1').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '1')
  });

  $('#2').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '2')
  });

  $('#3').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '3')
  });

  $('#opP').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '(')
  });

  $('#clP').click(function() {
    newEntry();
    $('#box').val($('#box').val() + ')')
  });

  $('#0').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '0')
  });

  $('#dot').click(function() {
    newEntry();
    $('#box').val($('#box').val() + '.')
  });
  
  //percentage calculation. evaluates the entry first before accepting input.
  $('#perc').click(function() {
    $('#box').val(eval($('#box').val()));
    $('#box').val(eval($('#box').val()/100));
    eq = 'o'
  });

  //evaluates the entry then set the eq variable for the new entries.
  $('#eq').click(function(){
    $('#box').val(eval($('#box').val()));
    eq = 'o';
  });

  $('#AC').click(function() {
    $('#box').val('')
  });
});
