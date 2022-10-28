dog = document.getElementById ("data-dog");
score = document.getElementById ("data-score");
frame = document.getElementById("data-frame");
start = document.getElementById("data-start");
stopt = document.getElementById("data-stop");
up = document.getElementById("data-up");
down = document.getElementById("data-down");
level = document.getElementById("level");
dtype = document.getElementById("data-type");

const frameSizeW  = getComputedStyle(frame).width;
const frameSizeH  = getComputedStyle(frame).height;

const dogSizeW = getComputedStyle(dog).width;
const dogSizeH = getComputedStyle(dog).height;

const Levels = [];

const dogtype = ["Busya", "Miki"]
let curdog = dogtype[0];

for (let i=0; i<11; i +=1){
    Levels.push(1000 - 60*i);
}

let currentLevel = Levels[0];

let dogTop;
let dogLeft;
let intervalname;
let scoreInt = 0;
let moveDoing = false;

// bonsu system object
bonus = {
    type: ["ForBusya", "ForMiki"],
    classUsed: ["BusyaBonus1","BusyaBonus2","MikiBonus1","MikiBonus2"],
    useBonus (){
      
    }
}
// bonsu system object

function dogtypef (dogname){
    let usedog = "";
    if (dogname === dogtype[0]) {
        usedog = dogtype[1];        
        dog.classList.remove("dog");  
        dog.classList.toggle("dog2");
    } else if (dogname === dogtype[1]){
        usedog = dogtype[0];
        dog.classList.remove("dog2");  
        dog.classList.toggle("dog");
    }

    dtype.innerHTML = usedog;
    curdog = usedog;
}

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
    level.innerHTML = "L: " + Levels.indexOf(levelnum);
}

function upLevel (curlevel){
    Levels.indexOf(curlevel) < Levels.length-1 ? currentLevel = Levels[Levels.indexOf(curlevel)+1]:currentLevel;
}

function downLevel (curlevel){
    Levels.indexOf(curlevel) >0 ? currentLevel = Levels[Levels.indexOf(curlevel)-1]:currentLevel;
}


function disabledButton () {
    start.classList.toggle("data-disabled");
    up.classList.toggle("data-disabled");
    down.classList.toggle("data-disabled");
    level.classList.toggle("data-disabled"); 
    dtype.classList.toggle("data-disabled");
}

function enabledButton () {
    start.classList.remove("data-disabled");
    up.classList.remove("data-disabled");
    down.classList.remove("data-disabled");
    level.classList.remove("data-disabled"); 
    dtype.classList.remove("data-disabled"); 
}

// ----------------events---------------

start.addEventListener("click", startdog);
stopt.addEventListener("click", stopdog);
dog.addEventListener("click", heatdog);
up.addEventListener("click", upinterval);
down.addEventListener("click", downinterval);
dtype.addEventListener("click", dogtypefcl);

function dogtypefcl (){
    dogtypef(curdog);
}

function startdog (){
    intervalDog (currentLevel, dogPosition, true);
    levelchange(currentLevel);
    disabledButton ();
}

function stopdog (){
    moveDoing=false;
    clearInterval(intervalname);
    enabledButton ();
}

function upinterval(){
    upLevel(currentLevel);
    levelchange(currentLevel);
}

function downinterval() {
    downLevel(currentLevel);
    levelchange(currentLevel);
}


function heatdog(){
    scoreInt += 1;
    score.innerHTML = scoreInt;
}