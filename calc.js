let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendNumber(num) {
  if (resultDisplayed) {
    clearDisplay();
  }
  currentInput += num;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput !== '') {
    if (currentOperator !== '') {
      calculateResult();
    }
    currentOperator = operator;
    currentInput += operator;
    updateDisplay();
  }
}

function calculateResult() {
  if (currentInput !== '' && currentOperator !== '') {
    currentInput = eval(currentInput).toString();
    currentOperator = '';
    resultDisplayed = true;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  resultDisplayed = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
