let str = "";
let numberReg = /\d+/g;
let operationReg = /[\+\-\*\/]+/g;
let element = document.getElementById("res");

//btn0 action
document.getElementById("btn0").addEventListener("click", function() {
  str = str + 0;
  renderStr();
});
//btn1 action
document.getElementById("btn1").addEventListener("click", function() {
  str = str + 1;
  renderStr();
});

//btnClr action
document.getElementById("btnClr").addEventListener("click", function() {
  str = "";
  renderStr();
});

//btnSum action
document.getElementById("btnSum").addEventListener("click", function() {
  str = str + "+";
  renderStr();
});

//btnSub action
document.getElementById("btnSub").addEventListener("click", function() {
  str = str + "-";
  renderStr();
});

//btnMul action
document.getElementById("btnMul").addEventListener("click", function() {
  str = str + "*";
  renderStr();
});
//btnDiv action
document.getElementById("btnDiv").addEventListener("click", function() {
  str = str + "/";
  renderStr();
});

//btnEql action
document.getElementById("btnEql").addEventListener("click", function() {
  if (!checkStr()) {
    let numbers = element.innerHTML.match(numberReg);
    let operations = element.innerHTML.match(operationReg);
    console.log(numbers);
    console.log(operations);
    console.log(str.indexOf(operations[0]));
    console.log(numbers[0]);
    console.log(parseInt(numbers[0], 2));
    numbers = numbers.map(item => parseInt(item, 2));
    while (operations.length > 0) {
      console.log("while");
      if (operations.indexOf("*") >= 0) {
        console.log("*");

        numbers[indexOf("*")] =
          numbers[indexOf("*")] * numbers[indexOf("*") + 1];
        numbers.splice(indexOf("*") + 1, 1);
        operations.splice(indexOf("*"), 1);
      } else if (operations.indexOf("/") > 0) {
        console.log("/");

        numbers[indexOf("/")] =
          numbers[indexOf("/")] / numbers[indexOf("/") + 1];
        numbers.splice(indexOf("/") + 1, 1);
        operations.splice(indexOf("/"), 1);
      } else if (operations.indexOf("+") >= 0) {
        console.log("+");

        numbers[operations.indexOf("+")] =
          numbers[operations.indexOf("+")] +
          numbers[operations.indexOf("+") + 1];
        numbers.splice(operations.indexOf("+") + 1, 1);
        operations.splice(operations.indexOf("+"), 1);
        console.log("--nn" + numbers);
        console.log("--oo" + operations);
      } else if (operations.indexOf("/") >= 0) {
        console.log("-");

        numbers[indexOf("-")] =
          numbers[indexOf("-")] - numbers[indexOf("-") + 1];
        numbers.splice(indexOf("-") + 1, 1);
        operations.splice(indexOf("-"), 1);
      }
    }
    str = numbers;
    renderStr();
  } else {
    alert("Line must ends with number.");
  }
});

function checkStr() {
  if (
    element.innerHTML.endsWith("+") ||
    element.innerHTML.endsWith("-") ||
    element.innerHTML.endsWith("*") ||
    element.innerHTML.endsWith("/")
  ) {
    return true;
  }
}
function renderStr() {
  element.innerHTML = str;
}
