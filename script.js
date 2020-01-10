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

    numbers = numbers.map(item => parseInt(item, 2));
    console.log(numbers);
    while (operations.length > 0) {
      if (operations.indexOf("*") >= 0) {
        let index = operations.indexOf("*");
        numbers[index] = numbers[index] * numbers[index + 1];
        numbers.splice(index + 1, 1);
        operations.splice(index, 1);
      } else if (operations.indexOf("/") >= 0) {
        let index = operations.indexOf("/");
        numbers[index] = numbers[index] / numbers[index + 1];
        numbers.splice(index + 1, 1);
        operations.splice(index, 1);
      } else if (operations.indexOf("-") >= 0) {
        let index = operations.indexOf("-");
        numbers[index] = numbers[index] - numbers[index + 1];
        numbers.splice(index + 1, 1);
        operations.splice(index, 1);
        console.log(numbers);
      } else if (operations.indexOf("+") >= 0) {
        let index = operations.indexOf("+");
        numbers[index] = numbers[index] + numbers[index + 1];
        numbers.splice(index + 1, 1);
        operations.splice(index, 1);
        console.log(numbers);
      }
    }

    str = Number(numbers[0]).toString(2);

    // str = Number(numbers[0]).toString(2);
    // console.log('str-'+str)
    // renderStr();
  } else {
    alert("Line must ends with number.");
  }

console.log("str-" + str);
renderStr();

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
