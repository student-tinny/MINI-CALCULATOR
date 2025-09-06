let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === "") return;
  display.value += " " + op + " ";
}

function appendDot() {
  display.value += ".";
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}


