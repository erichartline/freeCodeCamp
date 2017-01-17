$(document).ready(function() {
  var rest = 5;
  var session = 25;
  var timer;
  var breakLength = $("#breakLength");
  breakLength.text(5);
  var sessionLength = $("#sessionLength");
  sessionLength.text(25);
  var clock = $("#clock");

  $("#breakMinus").click(function() {
    rest -= 1;
    if (rest === 1) {
      // disable click
    }
    breakLength.text(rest);
  });
  $("#sessionMinus").click(function() {
    session -= 1;
    if (session === 1) {
      // disable click
    }
    sessionLength.text(session);
  });
  $("#breakPlus").click(function() {
    rest += 1;
    if (rest === 1) {
      // disable click
    }
    breakLength.text(rest);
  });
  $("#sessionPlus").click(function() {
    session += 1;
    if (session === 1) {
      // disable click
    }
    sessionLength.text(session);
  });
  $("#session").click(function() {
    // start timer
    startTimer();
  });
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  };
  function startTimer() {
    session--;
  };
  function countdown() {
    timer = setInterval(startTimer, 1000);
  }
});
