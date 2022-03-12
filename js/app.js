const previousOperandElement = document.querySelector(".previous_operant");
const currentOperandElement = document.querySelector(".current_operant");
const allClear = document.querySelector("#all-clear");
const deleted = document.querySelector("#delete");
const allOperatorBtn = document.querySelectorAll(".operator");
const allNumberBtn = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");

let previousOperand = "";
let currentOperand = "";
let operation = "";

function showNumberInDisplay() {
  currentOperandElement.innerHTML = currentOperand;
  previousOperandElement.innerHTML = `${previousOperand} ${operation}`;
}

function appendNumber(number) {
  currentOperand += number;
}

function choseOPerator(operator) {
  if (previousOperand) {
    previousOperand = calculate();
  } else {
    previousOperand = currentOperand;
  }
  operation = operator;
  currentOperand = "";
}

//all clear btn
allClear.addEventListener("click", function () {
  previousOperand = "";
  currentOperand = "";
  operation = "";
  showNumberInDisplay();
});

//calculate

function calculate() {
  let previous = Number(previousOperand);
  let current = Number(currentOperand);
  switch (operation) {
    case "÷":
      return previous / current;
      break;
    case "*":
      return previous * current;
      break;
    case "+":
      return previous + current;
      break;
    case "-":
      return previous - current;
      break;
    case "%":
      return previous % current;
      break;
  }
}

equals.addEventListener("click", function (e) {
  if (!previousOperand) return;
  if (currentOperand) {
    currentOperand = calculate().toFixed(2);
  } else {
    currentOperand = previousOperand;
  }
  previousOperand = "";
  operation = "";
  showNumberInDisplay();
});

//display number
allNumberBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if ((this.textContent === ".") & currentOperand.includes(".")) {
      return;
    }
    appendNumber(this.textContent);
    showNumberInDisplay();
  });
});

//display operator
allOperatorBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (!currentOperand) return;
    choseOPerator(this.textContent);
    showNumberInDisplay();
  });
});
