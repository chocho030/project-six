let operator = 0;
let num = 0;

// 숫자

function num0() {
  document.getElementById("result").innerText += 0;
}
// 1,2,3
function num1() {
  document.getElementById("result").innerText += 1;
}
function num2() {
  document.getElementById("result").innerText += 2;
}
function num3() {
  document.getElementById("result").innerText += 3;
}
// 4,5,6
function num4() {
  document.getElementById("result").innerText += 4;
}
function num5() {
  document.getElementById("result").innerText += 5;
}
function num6() {
  document.getElementById("result").innerText += 6;
}
// 7,8,9
function num7() {
  document.getElementById("result").innerText += 7;
}
function num8() {
  document.getElementById("result").innerText += 8;
}
function num9() {
  document.getElementById("result").innerText += 9;
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
