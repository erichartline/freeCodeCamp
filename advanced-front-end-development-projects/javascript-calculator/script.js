$(document).ready(function() {
    var num = "";
    var output = $("#output");
    output.text("0");

    $('.numbers, .operator, #decimal').click(function() {
        num += this.value;
        output.text(num);
        checkOperator();
        checkLimit();
    });

    // checks if last input was an operator and prevents two from being used twice in a row
    function checkOperator() {
      if (num.slice(-1) === "+" || num.slice(-1) === "-" || num.slice(-1) === "/" || num.slice(-1) === "*") {
        $(".operator").attr("disabled", true);
      } else if (num.slice(-1) === ".") {
        $("#decimal").attr("disabled", true);
      }
      else {
        $(".operator").removeAttr("disabled");
        $("#decimal").removeAttr("disabled");
        output.text(num);
      }
    };

    function checkLimit() {
      if (num.length > 10) {
        output.text("Overflow");
      }
    };

    $('#ac').click(function() {
        num = "";
        output.text("0");
    });

    $('#ce').click(function() {
        num = num.slice(0, -1);
        if (num === "") {
          output.text("0");
        } else {
          output.text(num);
        }
    });

    $('#equals').click(function() {
        num = eval(num);
        output.text(num);
        checkLimit();
    });

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
        } else if (keycode === 61 || keycode === 13 || keycode === 187) {
          $("#equals").click();
        } else if (keycode === 43) {
          $("#add").click();
        } else if (keycode === 45) {
          $("#subtract").click();
        } else if (keycode === 42 || keycode === 120) {
          $("#multiply").click();
        } else if (keycode === 47) {
          $("#divide").click();
        } else if (keycode === 110 || keycode === 190) {
          $("#decimal").click();
        }
    });

});
