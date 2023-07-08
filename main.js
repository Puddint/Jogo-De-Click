var clicks = 0;
var clicks_add = 1;
var score = document.querySelector("#score");

function buttonPressed() {
  clicks += clicks_add;
  score.textContent = "SCORE: " + clicks;
}

function buttonBuy(value, value2) {
  if (clicks < value) {
    alert("Clicks insuficientes!");
  } else if (value2 === clicks_add) {
    alert("Você já possui o produto!");
  } else {
    clicks -= value;
    clicks_add = value2;
    score.textContent = "SCORE: " + clicks;
  }
}
