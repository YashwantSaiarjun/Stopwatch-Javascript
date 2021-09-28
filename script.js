var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");

var ButtonStart = document.getElementById("button-start");
var ButtonStop = document.getElementById("button-stop");
var ButtonReset = document.getElementById("button-reset");

var interval; //to store timer values

// function works when start is clicked

function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML = "0"+ tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    
    if (seconds>9){
        appendSeconds.innerHTML = seconds;
    }
}


ButtonStart.onclick = function(){
    interval = setInterval(startTimer);
}

ButtonStop.onclick = function(){
    clearInterval(interval);
}

ButtonReset.onclick = function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}
