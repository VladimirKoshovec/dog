
dog = document.getElementById ("data-dog");
score = document.getElementById ("data-score");
frame = document.getElementById("data-frame");
start = document.getElementById("data-start");
stopt = document.getElementById("data-stop");
up = document.getElementById("data-up");
down = document.getElementById("data-down");

const frameSizeW  = getComputedStyle(frame).width;
const frameSizeH  = getComputedStyle(frame).height;

const dogSizeW = getComputedStyle(dog).width;
const dogSizeH = getComputedStyle(dog).height;

let dogTop;
let dogLeft;
let intervalname;
let scoreInt = 0;
let interval = 1000;

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
up.addEventListener("click", upinterval);
down.addEventListener("click", downinterval);


function startdog (){
    intervalDog (interval, dogPosition, true);
}

function stopdog (){
    intervalDog (interval, dogPosition, false);
}

function upinterval(){
    interval -= 20;
    intervalDog (interval, dogPosition, true);
}

function downinterval() {
    interval += 20;
    intervalDog (interval, dogPosition, true);
}

function intervalDog (timeinterval, intervaldo, action) {
    //let intervalname;
    // clearInterval(intervalname);
    if (action){
        intervalname = setInterval (intervaldo, timeinterval);
    } else {
        clearInterval(intervalname);
    }
}


function heatdog(){
    scoreInt += 1;
    score.innerHTML = scoreInt;
}







