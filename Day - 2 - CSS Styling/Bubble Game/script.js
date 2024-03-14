let bubbles = "";
let timeLeft = 10;
let curTerget = 0;
let score = 0;

function resetBubbles() {
  bubbles = "";

  for (let i = 0; i < 96; i++) {
    let val = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${val}</div>`;
  }

  curTerget = Math.floor(Math.random() * 10);
  document.querySelector(".main-game-canvas").innerHTML = bubbles;
  document.querySelector("#Target-value").innerHTML = curTerget;
}

function addTimer() {
  const clockSound = document.querySelector("#clock-ticking");
  if (clockSound && typeof clockSound.play === "function") {
    clockSound.play();
    clockSound.loop = true;
    clockSound.volume = 0.7;
  }
  let timer = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(timer);
      clockSound.pause();
      clockSound.currentTime = 0;
      document.querySelector(".main-game-canvas").innerHTML =
        '<h1 class="gameover"><div>Game Over</div><div>Score ' +
        score +
        "</div></h1>";
    } else {
      timeLeft--;
      document.querySelector("#current-time").innerHTML = timeLeft;
    }
  }, 1000);
}

document.querySelector(".main-game-canvas").addEventListener("click", (x) => {
  let num = Number(x.target.innerHTML);
  if (num === curTerget) {
    resetBubbles();
    score += timeLeft;
    timeLeft = 10;
    document.querySelector("#score").innerHTML = score;
    const successSound = document.querySelector("#success");
    if (successSound && typeof successSound.play === "function") {
        successSound.play();
        successSound.volume = 1;
    }
  } else if (timeLeft > 0){
    score -= 5;
    document.querySelector("#score").innerHTML = score;
    const failsound = document.querySelector("#wrong");
    if (failsound && typeof failsound.play === "function") {
        failsound.play();
        failsound.volume = 2;
    }
  }
});

resetBubbles();
addTimer();
