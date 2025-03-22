let result = 0;
let error = 1;

// 시작
function start() {
  result = Math.random() * 100;
  result = Math.floor(result);
  result++;
  document.getElementById("test").innerText = result;
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.marginLeft = "20.5rem";
}

// 입력확인
function ok() {
  if (result > document.getElementById("input-content").value) {
    document.getElementById("output-img").src = "/img/calculator.png";
    document.getElementById("output-text").innerText = "업";
    document.getElementById("input-content").value = " ";
    error++;
  } else if (result < document.getElementById("input-content").value) {
    document.getElementById("output-img").src = "/img/up-down.png";
    document.getElementById("output-text").innerText = "다운";
    document.getElementById("input-content").value = " ";
    error++;
  } else if ((result = document.getElementById("input-content").value)) {
    document.getElementById("output-text").innerText = "정답";
    document.getElementById("output-try").innerText = "시도 횟수 : " + error;
    document.getElementById("input-content").value = " ";
    document.getElementById("restart").style.display = "block";
    document.getElementById("reset").style.marginLeft = "17.5rem";
  }
}

// 재시작
function restart() {
  document.getElementById("output-img").src = " ";
  document.getElementById("output-text").innerText = " ";
  document.getElementById("output-try").innerText = " ";
  result = Math.random() * 100;
  result = Math.floor(result);
  result++;
  document.getElementById("test").innerText = result;
  document.getElementById("restart").style.display = "none";
  document.getElementById("reset").style.marginLeft = "20.5rem";
}

// 리셋

function reset() {
  document.getElementById("output-img").src = " ";
  result = 0;
  error = 1;
  document.getElementById("test").innerText = result;
  document.getElementById("output-text").innerText = " ";
  document.getElementById("output-try").innerText = " ";
  document.getElementById("start").style.display = "block";
  document.getElementById("reset").style.marginLeft = "18.5rem";
}
