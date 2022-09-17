
dog = document.getElementById ("data-dog");
score = document.getElementById ("data-score");
frame = document.getElementById("data-frame");
start = document.getElementById("data-start");
stopt = document.getElementById("data-stop");
up = document.getElementById("data-up");
down = document.getElementById("data-down");
level = document.getElementById("level")

const frameSizeW  = getComputedStyle(frame).width;
const frameSizeH  = getComputedStyle(frame).height;

const dogSizeW = getComputedStyle(dog).width;
const dogSizeH = getComputedStyle(dog).height;

let dogTop;
let dogLeft;
let intervalname;
let scoreInt = 0;
let interval = 1000;
let moveDoing = false;

function dogPosition() {
   dogTop =  Math.round ( Math.random() * (parseInt(frameSizeH) - 10) + 10 - parseInt(dogSizeH));
   dogLeft =  Math.round ( Math.random() * (parseInt(frameSizeW) - 10) + 10- parseInt(dogSizeW));

   dog.style.left = dogLeft + "px";
   dog.style.top = dogTop + "px";
}

function intervalDog (timeinterval, intervaldo, action) {
    if (!moveDoing){
    action? intervalname = setInterval (intervaldo, timeinterval): clearInterval(intervalname);
    } else {
    clearInterval(intervalname);   
    }
    moveDoing=true;
}

function levelchange(levelnum){
    level.innerHTML = levelnum;
}
// ----------------events---------------

start.addEventListener("click", startdog);
stopt.addEventListener("click", stopdog);
dog.addEventListener("click", heatdog);
up.addEventListener("click", upinterval);
down.addEventListener("click", downinterval);


function startdog (){
    intervalDog (interval, dogPosition, true);
    console.log(interval);
}

function stopdog (){
    moveDoing=false;
    clearInterval(intervalname);
}

function upinterval(){
    interval -= 20;
    levelchange(interval);
}

function downinterval() {
    interval += 20;
    levelchange(interval);
}

console.log(interval);

function heatdog(){
    scoreInt += 1;
    score.innerHTML = scoreInt;
}







