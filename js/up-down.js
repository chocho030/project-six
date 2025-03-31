let result = 0;
let error = 1;

// 시작
function start() {
  result = Math.random() * 100 + 1;
  result = Math.floor(result);
  result++;
  document.getElementById("test").innerText = result;
  document.getElementById("output-img").src = "/img/question.png";
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";
  document.getElementById("input-content").style.display = "inline";
  document.getElementById("input-ok").style.display = "inline";
}

// 입력확인
function ok() {
  if (result > document.getElementById("input-content").value) {
    document.getElementById("output-img").src = "/img/up.png";
    document.getElementById("output-text").innerText = "업";
    document.getElementById("input-content").value = " ";
    error++;
  } else if (result < document.getElementById("input-content").value) {
    document.getElementById("output-img").src = "/img/down.png";
    document.getElementById("output-text").innerText = "다운";
    document.getElementById("input-content").value = " ";
    error++;
  } else if ((result = document.getElementById("input-content").value)) {
    document.getElementById("output-img").src = "/img/ok.png";
    document.getElementById("output-text").innerText = "정답";
    document.getElementById("output-try").innerText = "시도 횟수 : " + error;
    document.getElementById("input-content").value = " ";

    document.getElementById("output-img").style.marginTop = "2rem";
    document.getElementById("restart").style.display = "block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("input-content").style.display = "none";
    document.getElementById("input-ok").style.display = "none";
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
  document.getElementById("reset").style.display = "block";
  document.getElementById("input-content").style.display = "inline";
  document.getElementById("input-ok").style.display = "inline";
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
  document.getElementById("restart").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("input-content").style.display = "none";
  document.getElementById("input-ok").style.display = "none";
}
