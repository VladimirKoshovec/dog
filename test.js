
dog = document.getElementById ("data-dog");
score = document.getElementById ("data-score");
frame = document.getElementById("data-frame");
start = document.getElementById("data-start");
stopt = document.getElementById("data-stop");

const frameSizeW  = getComputedStyle(frame).width;
const frameSizeH  = getComputedStyle(frame).height;

const dogSizeW = getComputedStyle(dog).width;
const dogSizeH = getComputedStyle(dog).height;

let dogTop;
let dogLeft;
let intervalname;
let scoreInt = 0;

function dogPosition() {
   dogTop =  Math.round ( Math.random() * (parseInt(frameSizeH) - 10) + 10 - parseInt(dogSizeH));
   dogLeft =  Math.round ( Math.random() * (parseInt(frameSizeW) - 10) + 10- parseInt(dogSizeW));

   dog.style.left = dogLeft + "px";
   dog.style.top = dogTop + "px";
}

// ----------------events---------------

start.addEventListener("click", startdog);
stopt.addEventListener("click", stopdog);
dog.addEventListener("click", heatdog);


function startdog(){
    intervalname = setInterval (dogPosition, 500);
}

function stopdog(){
    clearInterval(intervalname);
}

function heatdog(){
    scoreInt += 1;
    frame.innerHtml = scoreInt;
    //console.log(scoreInt);
}







