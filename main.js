var clicks = 0;
var clicks_add = 1;
var score = document.querySelector("#score");

function buttonpressed(){
    score.textContent = "SCORE: " + (clicks = clicks + clicks_add);
}

function button_buy(value, value2){
    if(clicks < value){
        alert("clicks insuficientes!");
        return;
    }else if(value2 === clicks_add){
        alert("você já possui o produto!");
        return;
    }else{
        clicks = clicks - value;
        clicks_add = value2;
        score.textContent = "SCORE: " + clicks;
    }
}
