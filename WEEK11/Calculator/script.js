var buttons = document.querySelectorAll(".btn");
var resultScreen = document.querySelector(".screen");

var hasResult = false;

console.log("buttons", buttons);

for (var button of buttons) {
  button.addEventListener("click", function (event) {
    var target = event.target;

    var value = target.innerText;

    if (target.innerText == "=") {
      try {
        var result = eval(resultScreen.innerText);
        resultScreen.innerText = result;
      } catch (error) {
        resultScreen.innerText = "Error!";
      }
      hasResult = true;
      return;
    }
    //  if (target.innerText == "=") {
    //  var operation = resultScreen.innerText;

    //   console.log("Operation", operation);

    //   //get first number
    //   for (c of operation) {
    //     if (!parseInt(c) && c != "=") {
    //       operator = c;
    //       console.log("Operator", operator);
    //       break;
    //     } else if (c == "=") {
    //       console.log("c=", c);
    //       resultScreen.innerText = "Error!";
    //       return;
    //     }
    //   }
    //   var number1 = operation.substring(0, operation.indexOf(operator));
    //   console.log(operation.indexOf(operator));
    //   var number2 = operation.substring(
    //     operation.indexOf(operator) + 1,
    //     operation.indexOf("=")
    //   );

    //   if (!parseInt(number2)) {
    //     resultScreen.innerText = "Error!";
    //   } else {
    //     try {
    //       var result = eval(resultScreen.innerText);
    //       resultScreen.innerText = result;
    //     } catch (error) {
    //       resultScreen.innerText = "Error!";
    //     }
    //     return;
    //   }

    if (target.innerText == "c") {
      resultScreen.innerText = "";
      return;
    }

    //print what's typed on the result screen
    if (hasResult) {
      resultScreen.innerText = "";
      hasResult = false;
    }
    resultScreen.innerText += value;
  });
}
