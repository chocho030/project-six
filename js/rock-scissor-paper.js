// scissor = 0;
// rock = 1;
// paper = 2;

let computer = 0;
let result = 0;
let computerWin = 0;
let userWin = 0;

// 컴퓨터
function start() {
  computer = Math.random() * 3;
  computer = Math.floor(computer);
  document.getElementById("next").style.display = "none";
  document.getElementById("computer-img").src = "/img/question.png";
  document.getElementById("computer-text").innerText = " ";
}

function computerResult() {
  if (computer == 0) {
    document.getElementById("computer-img").src = "/img/r-s-p--scissor.png";
    document.getElementById("computer-text").innerText = "가위";
  } else if (computer == 1) {
    document.getElementById("computer-img").src = "/img/r-s-p--rock.png";
    document.getElementById("computer-text").innerText = "바위";
  } else if (computer == 2) {
    document.getElementById("computer-img").src = "/img/r-s-p--paper.png";
    document.getElementById("computer-text").innerText = "보";
  }
}

// 선택지
function user(num) {
  result = (num - computer + 3) % 3;

  if (result == 1) {
    // 승리
    userWin++;
    document.getElementById("result-user").innerText =
      "user :" + userWin + " / 3";
  } else if (result == 2) {
    // 패배
    computerWin++;
    document.getElementById("result-computer").innerText =
      "computer :" + computerWin + " / 3";
  }

  computerResult();
  document.getElementById("next").style.display = "block";

  //   엔딩
  if (userWin == 3) {
    document.getElementById("modal").style.display = "inline-flex";
    document.getElementById("final-result").innerText = "WIN";
  } else if (computerWin == 3) {
    document.getElementById("modal").style.display = "inline-flex";
    document.getElementById("final-result").innerText = "DEFEAT";
  }
}

// 재시작
function restart() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("computer-img").src = "/img/go.png";
  document.getElementById("computer-text").innerText = " ";
  document.getElementById("result-computer").innerText = computer = 0;
  result = 0;
  computerWin = 0;
  userWin = 0;

  document.getElementById("result-computer").innerText =
    "computer :" + computerWin + " / 3";
  document.getElementById("result-user").innerText =
    "user :" + userWin + " / 3";

  document.getElementById("next").style.display = "none";
}
