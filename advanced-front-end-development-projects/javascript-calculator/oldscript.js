"use strict";

$(document).ready(function() {
  var number = "";
  var newNumber = "";
  var operator = "";
  var output = $("#output");
  output.text("0");

  $('#ac').click(function() {
    number = "";
    newNumber = "";
    $('#output').text("0");
  });

  $('#ce').click(function() {
    // need to revise to only clear last statement
    number = "";
    $('#output').text("0");
    newNumber = "";
  });

  $(".numbers").click(function() {
    number += $(this).text();
    output.text(number);
  });

  $(".operator").click(function() {
    operator += $(this).text();
    newNumber = number;
    number = "";
    output.text(newNumber + operator);
  });

  $("#equals").click(function() {
    if (operator === "+") {
      number = (parseFloat(number) + parseFloat(newNumber)).toString();
    } else if (operator === "-") {
      number = (parseFloat(newNumber) - parseFloat(number)).toString();
    } else if (operator === "/") {
      number = (parseFloat(newNumber) / parseFloat(number)).toString();
    } else if (operator === "*") {
      number = (parseFloat(number) * parseFloat(newNumber)).toString();
    }
    output.text(number);
    number = "";
    newNumber = "";
  });

  // function to make keys work, need to update
  $(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 49) {
      $("#one").click();
    } else if (keycode === 50) {
      $("#two").click();
    } else if (keycode === 51) {
      $("#three").click();
    } else if (keycode === 52) {
      $("#four").click();
    } else if (keycode === 53) {
      $("#five").click();
    } else if (keycode === 54) {
      $("#six").click();
    } else if (keycode === 55) {
      $("#seven").click();
    } else if (keycode === 56) {
      $("#eight").click();
    } else if (keycode === 57) {
      $("#nine").click();
    } else if (keycode === 48) {
      $("#zero").click();
    } else if (keycode === 97) {
      $("#ac").click();
    } else if (keycode === 99) {
      $("#ce").click();
    } else if (keycode === 61) {
      $("#equals").click();
    } else if (keycode === 43) {
      $("#add").click();
    } else if (keycode === 45) {
      $("#subtract").click();
    } else if (keycode === 42 || keycode === 120) {
      $("#multiply").click();
    } else if (keycode === 47) {
      $("#divide").click();
    }
  });

});
