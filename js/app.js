const previousOperandElement = document.querySelector(".previous_operant");
const currentOperandElement = document.querySelector(".current_operant");
const allClear = document.querySelector("#all-clear");
const deleted = document.querySelector("#delete");
const allOperator = document.querySelectorAll(".operator");
const allNumber = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");

let previousOperand = "";
let currentOperand = "";

function appendNumber(number) {
  currentOperand += number;
}

function updateNumber() {
  currentOperandElement.innerHTML = currentOperand;
}

allNumber.forEach((btn) => {
  btn.addEventListener("click", () => {
    if ((btn.textContent === ".") & currentOperand.includes(".")) {
      return;
    }
    appendNumber(btn.textContent);
    updateNumber();
  });
});
