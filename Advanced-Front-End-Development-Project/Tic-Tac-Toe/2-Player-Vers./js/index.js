$(document).ready(function() {
  var playerOne = '';
  var playerTwo= '';
  var currentTurn= '';
  var moves = 0;
  
  //Function for 1 full turn
  var oneTurn = function() {
    //prevent game from initiating without choosing an icon
    if (playerOne === '') {
      moves = 0;
    }
    //prevent clicking the same box
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
  //clear and reset the board
  function clearBoard() {
    document.getElementById("o").disabled = false;
    document.getElementById("x").disabled = false;
    $('.box').text('');
    moves = 0;
    playerOne = '';
    playerTwo = '';
  };
  
  //check for a draw
  function draw() {
    if (moves >= 9) {
      alert("Draw!");
      clearBoard();
    };
  };
  
  //check for a win
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

  //alert the winner, then reset the board
  function alertWin() {
    if (currentTurn == playerOne) {
      alert('Player 1 Win!');
      clearBoard();
    } else {
      alert('Player 2 Wins!');
      clearBoard();
    }
  };
  
  //player picks o
  $('#o').click(function() {
    document.getElementById("o").disabled = true;
    document.getElementById("x").disabled = true;
    playerOne = 'o';
    currentTurn = 'o';
    playerTwo = 'x';
  });

  //player picks x
  $('#x').click(function() {
    document.getElementById("o").disabled = true;
    document.getElementById("x").disabled = true;
    playerOne = 'x';
    currentTurn = 'x';
    playerTwo = 'o';
  });
  
  //toggles turn
  function next() {
    if (currentTurn == playerOne) {
      currentTurn = playerTwo;
    } else {
      currentTurn = playerOne;
    }
  };

  $('#reset').on('click', clearBoard);

  $('.box').on('click', oneTurn);
});
