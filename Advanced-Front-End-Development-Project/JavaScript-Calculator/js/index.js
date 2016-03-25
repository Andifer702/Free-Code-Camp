var eq = '';
var operand = ['*', "/", '+','-', '%'];
function adding(button){
  
}

$('#7').click(function(){
  $('#box').val($('#box').val() + '7')
});

$('#8').click(function(){
  $('#box').val($('#box').val() + '8')
});

$('#9').click(function(){
  $('#box').val($('#box').val() + '9')
});

$('#mult').click(function(){
  $('#box').val($('#box').val() + '*')
});

$('#divide').click(function(){
  $('#box').val($('#box').val() + '/')
});

$('#4').click(function(){
  $('#box').val($('#box').val() + '4')
});

$('#5').click(function(){
  $('#box').val($('#box').val() + '5')
});

$('#6').click(function(){
  $('#box').val($('#box').val() + '6')
});

$('#add').click(function(){
  $('#box').val($('#box').val() + '+')
});

$('#minus').click(function(){
  $('#box').val($('#box').val() + '-')
});

$('#1').click(function(){
  $('#box').val($('#box').val() + '1')
});

$('#2').click(function(){
  $('#box').val($('#box').val() + '2')
});

$('#3').click(function(){
  $('#box').val($('#box').val() + '3')
});

$('#opP').click(function(){
  $('#box').val($('#box').val() + '(')
});

$('#clP').click(function(){
  $('#box').val($('#box').val() + ')')
});

$('#0').click(function(){
  $('#box').val($('#box').val() + '0')
});

$('#dot').click(function(){
  $('#box').val($('#box').val() + '.')
});

$('#perc').click(function(){
  $('#perc').val(eval($('#box').val())/100)
});

$('#eq').click(function(){
  $('#box').val(eval($('#box').val())
)});

$('#AC').click(function(){
  $('#box').val(' ')
});
