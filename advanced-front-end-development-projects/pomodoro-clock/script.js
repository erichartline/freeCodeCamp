$(document).ready(function() {
  var rest = 5;
  var session = 25;
  var timer;
  var breakLength = $("#break-length");
  breakLength.text(rest);
  var sessionLength = $("#session-length");
  sessionLength.text(session);
  var timeLeft = $("#time-left");
  var start = $("#start_stop");

  $("#break-decrement").click(function() {
    if (rest > 1) {
      rest--;
    }
    breakLength.text(rest);
  });
  $("#session-decrement").click(function() {
    if (session > 1) {
      session--;
    }
    sessionLength.text(session);
  });
  $("#break-increment").click(function() {
    if (rest < 60) {
      rest++;
    }
    breakLength.text(rest);
  });
  $("#session-increment").click(function() {
    if (session < 60) {
      session++;
    }
    sessionLength.text(session);
  });
  $("#start_stop").click(function() {
    // show timer on start
    $("#time-left").show();
    // start timer
    startTimer(session, 0);
  });
  $('#reset').click(function() {
    clearTimeout(timer);
    rest = 5;
    session = 25;
    // need to fix timer variable?
    timer = "";
    breakLength.text(5);
    sessionLength.text(25);
  });
  function startTimer() {
    var minutes = session;
    var seconds = session / 60;

  }
  function pauseTimer() {

  };
});

/*
TO DO:

1) clicking start_stop should begin running from session value
2) running timer should display remaining time in mm:ss format
3) running timer should pause on start_stop click
4) paused timer should resume running when start_stop clicked
5) when timer = 00:00 and new countdown begins, timer-label should display string saying break has begun
6) when timer = 00:00, start break countdown
7) when break = 00:00 and new countdown begins, timer-label should display string
8) when break = 00:00, start session countdown
9) when countdown = 00:00, play sound

*/
