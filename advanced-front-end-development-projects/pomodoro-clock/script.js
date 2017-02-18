$(document).ready(function() {
  var rest = 5;
  var session = 25;
  var sessionTime;
  var minutes;
  var seconds;
  var state = "work";
  var isSession = true;
  var timer;
  // variables for various IDs
  var breakLength = $("#break-length");
  var sessionLength = $("#session-length");
  var timeLeft = $("#time-left");
  var start = $("#start_stop");
  var beep = document.getElementById('beep');
  // set text for session and break
  breakLength.text(rest);
  sessionLength.text(session);
  // decrease break time
  $("#break-decrement").click(function() {
    if (rest > 1) {
      rest -= 1;
    }
    breakLength.text(rest);
  });
  // decrease session time
  $("#session-decrement").click(function() {
    if (session > 1) {
      session -= 1;
      if (state === "work") {
        if (session < 10) {
          timeLeft.text('0' + session + ':00');
        } else {
          timeLeft.text(session + ':00');
        }
      }
    }
    sessionLength.text(session);
  });
  // increase break time
  $("#break-increment").click(function() {
    if (rest < 60) {
      rest += 1;
    }
    breakLength.text(rest);
  });
  // increase session time
  $("#session-increment").click(function() {
    if (session < 60) {
      session += 1;
      if (state === "work") {
        if (session < 10) {
          timeLeft.text('0' + session + ':00');
        } else {
          timeLeft.text(session + ':00');
        }
      }
    }
    sessionLength.text(session);
  });
  $("#start_stop").click(function() {
    // show timer on start
    $("#time-left").show();
    if (state === "work") {
      start.html("Stop");
      sessionTime = session * 60;
      countdown();
      state = "start";
    } else if (state === "start") {
      clearInterval(timer);
      state = "pause";
      start.html("Start");
    } else if (state === "pause") {
      countdown();
      state = "start";
      start.html("Start");
    }
  });
  $('#reset').click(function() {
    clearInterval(timer);
    rest = 5;
    session = 25;
    state = "work";
    isSession = true;
    breakLength.html(rest);
    sessionLength.html(session);
    timeLeft.html('25:00');
    $("#timer-label").html("Session");
  });
  function countdown() {
    if (sessionTime >= 0) {
      minutes = Math.floor(sessionTime / 60);
      seconds = sessionTime % 60;
      if (minutes < 10 && seconds < 10) {
        timeLeft.text('0' + minutes + ':0' + seconds);
      } else if (minutes < 10) {
        timeLeft.text('0' + minutes + ':' + seconds);
      } else if (seconds < 10) {
        timeLeft.text(minutes + ':0' + seconds);
      } else {
        timeLeft.text(minutes + ':' + seconds);
      }
      sessionTime -= 1;
      timer = setTimeout(countdown, 1000);
    } else {
        beep.play();
        clearInterval(timer);
        if (isSession) {
          sessionTime = rest * 60;
          isSession === false;
        } else {
          sessionTime = session * 60;
          isSession === true;
        }
        countdown();
        $("#timer-label").html("Time for your break!");
      }
  };
});

/*
TO DO:

1) When I click the element with the id of "reset", any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.
2) running timer should display remaining time in mm:ss format
3) running timer should pause on start_stop click
4) paused timer should resume running when start_stop clicked
5) when timer = 00:00 and new countdown begins, timer-label should display string saying break has begun
6) when timer = 00:00, start break countdown
7) when break = 00:00 and new countdown begins, timer-label should display string
8) when break = 00:00, start session countdown
9) when countdown = 00:00, play sound

*/
