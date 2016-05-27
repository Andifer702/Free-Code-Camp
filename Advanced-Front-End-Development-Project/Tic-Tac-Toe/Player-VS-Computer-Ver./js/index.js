$(document).ready(function() {
  var user;
  var ai;
  var currentTurn;
  var moves = 0;
  var position;
  
  clearBoard();
  
  //function for one turn.
  var oneTurn = function() {
    //if user is not selected, game will not initiate
    if (user === '') {
      moves = 0;
      //statement to prevent clicking the same spot
    } else if ($(this).text() === 'x' || $(this).text() === 'o') {
      moves = moves;
      //places a user icon then AI makes a move
    } else {
      $(this).text(currentTurn);
      moves = moves + 1;
      checkWin();
      draw();
      next();
      aiMove();
      next();
    }
  };
  
  //Makes a random move for a computer.
  function aiMove() {
    position = Math.floor((Math.random() * 10));
    //if an AI does not have an assigned icon, reset the board
    if (ai === '') {
      clearBoard();
    } else {
      //if-else statement to mark only unmarked box if not, repeat    this function
      if ($('#' + position).text() === ' ') {
        $('#' + position).text(currentTurn);
        moves = moves + 1;
        checkWin();
        draw();
      } else {
        aiMove();
      }
    }
  };
  
  //Clear the board after a win/draw/reset
  function clearBoard() {
    document.getElementById("o").disabled = false;
    document.getElementById("x").disabled = false;
    $('.box').text(' ');
    moves = 0;
    user = '';
    ai = '';
  };
  
  //Check for draws and alert.
  function draw() {
    if (moves === 9) {
      alert("Draw!");
      clearBoard();
    };
  };
  
  //Check the winning conditions.
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

  //Alert the winner of the game
  function alertWin() {
    if (currentTurn == user) {
      alert('Player 1 Win!');
      clearBoard();
    } else {
      alert('Computer Wins!');
      clearBoard();
    }
  };
  
  //user picks O
  $('#o').click(function() {
    document.getElementById("o").disabled = true;
    document.getElementById("x").disabled = true;
    user = 'o';
    currentTurn = 'o';
    ai = 'x';
  });
  
  //user picks x
  $('#x').click(function() {
    document.getElementById("o").disabled = true;
    document.getElementById("x").disabled = true;
    user = 'x';
    currentTurn = 'x';
    ai = 'o';
  });
  
  //toggle turns between user and AI
  function next() {
    if (currentTurn == user) {
      currentTurn = ai;
    } else {
      currentTurn = user;
    }
  };

  $('#reset').on('click', clearBoard);

  $('.box').on('click', oneTurn);
});
