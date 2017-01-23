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
  $("#start_stop").click(function() {
    // start timer
    startTimer(session, 0);
  });
  $('#reset').click(function() {
    clearTimeout(timer);
    rest = 5;
    session = 25;
    // need to fix timer variable?
    timer = null;
    breakLength.text(5);
    sessionLength.text(25);
  });
  function startTimer(m, s) {
    if (s === 0) {
      if (m === 0) {
        return;
      } else if (m != 0) {
        m -= 1;
        s = 60;
      }
    } if (s < 10 && m < 10) {
      timeLeft.text('0' + m + ':0' + s);
    } else {
      timeLeft.text(m + ":" + s);
    }
    s -= 1;
    timer = setTimeout(function() {
      startTimer(m, s);
    }, 1000);
  }

});
