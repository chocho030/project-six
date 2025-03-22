let operator = 0;
let num = 0;

// 숫자

function number(n) {
  document.getElementById("result").innerText += n;
}

// 기호

function plus() {
  if (operator == 0) {
    num = document.getElementById("result").innerText;
    document.getElementById("process").innerText += num + " + ";
    document.getElementById("result").innerText = " ";
  } else if (operator == 1) {
    document.getElementById("process").innerText +=
      document.getElementById("result").innerText + " + ";
    num = Number(num) + Number(document.getElementById("result").innerText);
    document.getElementById("mid-result").innerText = num;
    document.getElementById("result").innerText = " ";
  } else if (operator == 2) {
    document.getElementById("process").innerText +=
      document.getElementById("result").innerText + " + ";
    num = Number(num) - Number(document.getElementById("result").innerText);
    document.getElementById("mid-result").innerText = num;
    document.getElementById("result").innerText = " ";
  }
  operator = 1;
}

function minus() {
  if (operator == 0) {
    num = document.getElementById("result").innerText;
    document.getElementById("process").innerText += num + " - ";
    document.getElementById("result").innerText = " ";
  } else if (operator == 1) {
    document.getElementById("process").innerText +=
      document.getElementById("result").innerText + " - ";
    num = Number(num) + Number(document.getElementById("result").innerText);
    document.getElementById("mid-result").innerText = num;
    document.getElementById("result").innerText = " ";
  } else if (operator == 2) {
    document.getElementById("process").innerText +=
      document.getElementById("result").innerText + " - ";
    num = Number(num) - Number(document.getElementById("result").innerText);
    document.getElementById("mid-result").innerText = num;
    document.getElementById("result").innerText = " ";
  }
  operator = 2;
}

// 결과

function result() {
  if (operator == 0) {
    num = "";
    document.getElementById("result").innerText = " ";
  } else if (operator == 1) {
    document.getElementById("process").innerText +=
      document.getElementById("result").innerText;
    document.getElementById("mid-result").innerText = " ";
    num = Number(num) + Number(document.getElementById("result").innerText);
    document.getElementById("result").innerText = "=" + num;
  } else if (operator == 2) {
    document.getElementById("process").innerText +=
      document.getElementById("result").innerText;
    document.getElementById("mid-result").innerText = " ";
    num = Number(num) - Number(document.getElementById("result").innerText);
    document.getElementById("result").innerText = "=" + num;
  }
}

// 리셋

function reset() {
  document.getElementById("process").innerText = "";
  document.getElementById("mid-result").innerText = "";
  document.getElementById("result").innerText = "";
  operator = 0;
}
