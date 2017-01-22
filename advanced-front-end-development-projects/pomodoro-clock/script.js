$(document).ready(function() {
  var rest = 5;
  var session = 25;
  var timer;
  var breakLength = $("#break-length");
  breakLength.text(rest);
  var sessionLength = $("#session-length");
  sessionLength.text(session);
  var clock = $("#time-left");

  $("#break-decrement").click(function() {
    rest -= 1;
    if (rest <= 1) {
      rest = 1;
    }
    breakLength.text(rest);
  });
  $("#session-decrement").click(function() {
    session -= 1;
    if (session <= 1) {
      session = 1;
    }
    sessionLength.text(session);
  });
  $("#break-increment").click(function() {
    rest += 1;
    if (rest > 60) {
      rest = 60;
    }
    breakLength.text(rest);
  });
  $("#session-increment").click(function() {
    session += 1;
    if (session > 60) {
      session = 60;
    }
    sessionLength.text(session);
  });
  $("#timer-label").click(function() {
    // start timer
    startTimer();
    console.log(session);
  });
  $('#reset').click(function() {
    clearInterval(timer);
    rest = 5;
    session = 25;
    // need to fix timer variable?
    timer = null;
    breakLength.text(5);
    sessionLength.text(25);
  });
  function startTimer() {
    setInterval(function() {
      session--;
      if (session >= 0) {
        clock.text(session);
      }
    }, 1000);
  };
  function countdown() {
    timer = setInterval(startTimer, 1000);
  };
});
