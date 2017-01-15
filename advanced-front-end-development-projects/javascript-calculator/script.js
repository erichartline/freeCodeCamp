$(document).ready(function() {
    var num = "", operator = "", num2 = "", equation = "";
    var output = $("#output");
    output.text("0");
    var history = $("#history");
    history.text("0");

    $('.numbers').click(function() {
        if($('.operator, #decimal').data('clicked')) {
          num2 += this.value;
          equation = num + num2;
          output.text(num2);
          history.text(equation);
        } else {
          num += this.value;
          output.text(num);
          history.text(num);
        }
        checkOperator();
        checkLimit();
    });

    $('.operator, #decimal').click(function() {
      $(this).data('clicked', true);
      num += this.value;
      operator = this.value;
      output.text(operator);
      history.text(num);
      checkOperator();
    });

    // checks if last input was an operator and prevents two from being used twice in a row
    function checkOperator() {
      if (num.slice(-1) === "+" || num.slice(-1) === "-" || num.slice(-1) === "/" || num.slice(-1) === "*") {
        $(".operator").attr("disabled", true);
      } else if (num.slice(-1) === ".") {
        $("#decimal").attr("disabled", true);
      } else {
        $(".operator").removeAttr("disabled");
        $("#decimal").removeAttr("disabled");
        history.text(num);
      }
    };

    function checkLimit() {
      if (num.length > 10) {
        num = "";
        num2 = "";
        operator = "";
        output.text("0");
        history.text("Digit Limit Reached");
      }
    };

    $('#ac').click(function() {
        num = "";
        num2 = "";
        equation = "";
        operator = "";
        output.text("0");
        history.text("0");
        $('.operator, #decimal').data('clicked', false);
    });

    $('#ce').click(function() {
        num = num.slice(0, -1);
        if (num === "") {
          output.text("0");
          history.text("0");
        } else {
          output.text(num);
          history.text(num);
        }
    });

    $('#equals').click(function() {
      num = eval(equation);
      num = num.toString().match(/^-?\d+(?:\.\d{0,8})?/)[0]
      output.text(num);
      history.text(equation + " = " + num);
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
