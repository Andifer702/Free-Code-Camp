$(document).ready(function() {
  var input;
  var sequence = [];
  var userMove = [];
  var click = 0;
  var num;
  var strict;
  var audio1 = new Audio(
    'http://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio2 = new Audio(
    'http://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audio3 = new Audio(
    'http://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var audio4 = new Audio(
    'http://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');

  function btnSound(audio) {
    switch (audio) {
      case 'btn1':
        audio1.play();
        break;
      case 'btn2':
        audio2.play();
        break;
      case 'btn3':
        audio3.play();
        break;
      case 'btn4':
        audio4.play();
        break;
      default:
        break;
    }
  };

  function numGen() {
    num = Math.floor((Math.random() * 4) + 1);
    return num;
  };

  function lightUp(input) {
    btnSound(input)
    $('#' + input).toggleClass('brighten');
    setTimeout(function() {
      $('#' + input).toggleClass('brighten');
    }, 500);
  }

  function playSeq() {
    var i = 0;
    var animate = setInterval(function() {
      lightUp(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(animate)
      }
    }, 800)
  }

  function makeMove() {
    numGen();
    input = 'btn' + num;
    sequence.push(input);
    $('#counter').text(+$('#counter').text() + 1);
    playSeq();
  };

  function gameOver() {
    alert("Game Over!")
    sequence = [];
    userMove = [];
    click = 0;
    $('#counter').text(0);
    setTimeout(function() {
      makeMove();
    }, 2000)
  };

  function checkSeq(i) {
    if (sequence[i] != userMove[i]) {
      audioBuzzer.play();
      if ($('#strict').hasClass('strictOn')) {
        gameOver();
      } else {
        userMove = [];
        click = 0;
        playSeq();
      }
    } else {
      click = click + 1;
      checkFull();
    }
  };

  function checkFull() {
    if (userMove.length === 20) {
      alert("You Win!")
      sequence = [];
      userMove = [];
      click = 0;
      $('#counter').text(0);
      setTimeout(function() {
        makeMove();
      }, 2000)

    }
    else if (userMove.length == sequence.length) {
      makeMove();
      userMove = [];
      click = 0;
    }
  };

  $('.btn').click(function() {
    input = $(this).attr('id');
    userMove.push(input);
    btnSound(input);
    checkSeq(click);
  }).on('mousedown', function() {
    $(this).toggleClass('brighten')
  }).on('mouseup', function() {
    $(this).toggleClass('brighten')
  });

  $('#reset').click(function() {
    $('#counter').text(0);
    sequence = [];
    userMove = [];
    click = 0;
    setTimeout(function() {
      makeMove();
    }, 1000)
  });

  $('#start').on('click', function() {
    $('#start').toggleClass('on');
    if ($('#start').hasClass('on')) {
      $('.btn').removeClass('unclickable disabled')
      $('#reset').removeClass('unclickable disabled')
      $('#strict').removeClass('unclickable disabled')
      setTimeout(function() {
        makeMove();
      }, 1000)

    } else {
      $('.btn').addClass('unclickable disabled')
      $('#reset').addClass('unclickable disabled')
      $('#strict').addClass('unclickable disabled')
      $('#counter').text(0)
      sequence = [];
      userMove = [];
      click = 0;
    }
    $('#strict').click(function() {
      $('#strict').toggleClass('strictOn');
    });
  });

});
