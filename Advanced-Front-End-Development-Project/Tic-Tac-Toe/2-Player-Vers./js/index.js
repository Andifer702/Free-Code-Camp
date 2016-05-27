$(document).ready(function() {
  var user = '';
  var ai= '';
  var currentTurn= '';
  var moves = 0;

  var handler = function() {
    if (user === '') {
      moves = 0;
    }
    else if ($(this).text() === 'x' || $(this).text() === 'o'){
      moves = moves;
    }
    else {
      $(this).text(currentTurn);
      moves = moves + 1;
      checkWin();
      draw();
      next();
    };
  };

  function clearBoard() {
    document.getElementById("o").disabled = false;
    document.getElementById("x").disabled = false;
    $('.box').text('');
    moves = 0;
    user = '';
    ai = '';
  };

  function draw() {
    if (moves >= 9) {
      alert("Draw!");
      clearBoard();
    };
  };

  function checkWin() {
    switch (true) {
      case $('#1').text() === currentTurn && $('#2').text() === currentTurn &&
      $('#3').text() === currentTurn:
        alertWin();
        break;
      case $('#4').text() === currentTurn && $('#5').text() === currentTurn &&
      $('#6').text() === currentTurn:
        alertWin();
        break;
      case $('#7').text() === currentTurn && $('#8').text() === currentTurn &&
      $('#9').text() === currentTurn:
        alertWin();
        break;
      case $('#1').text() === currentTurn && $('#4').text() === currentTurn &&
      $('#7').text() === currentTurn:
        alertWin();
        break;
      case $('#2').text() === currentTurn && $('#5').text() === currentTurn &&
      $('#8').text() === currentTurn:
        alertWin();
        break;
      case $('#3').text() === currentTurn && $('#6').text() === currentTurn &&
      $('#9').text() === currentTurn:
        alertWin();
        break;
      case $('#1').text() === currentTurn && $('#5').text() === currentTurn &&
      $('#9').text() === currentTurn:
        alertWin();
        break;
      case $('#3').text() === currentTurn && $('#5').text() === currentTurn &&
      $('#7').text() === currentTurn:
        alertWin();
        break;
      default:
    }
  };

  function alertWin() {
    if (currentTurn == user) {
      alert('Player 1 Win!');
      clearBoard();
    } else {
      alert('Player 2 Wins!');
      clearBoard();
    }
  };

  $('#o').click(function() {
    document.getElementById("o").disabled = true;
    document.getElementById("x").disabled = true;
    user = 'o';
    currentTurn = 'o';
    ai = 'x';
  });

  $('#x').click(function() {
    document.getElementById("o").disabled = true;
    document.getElementById("x").disabled = true;
    user = 'x';
    currentTurn = 'x';
    ai = 'o';
  });

  function next() {
    if (currentTurn == user) {
      currentTurn = ai;
    } else {
      currentTurn = user;
    }
  };

  $('#reset').on('click', clearBoard);

  $('.box').on('click', handler);
});
