
dog = document.getElementById ("data-dog");
score = document.getElementById ("data-score");
frame = document.getElementById("data-frame");

const frameSizeW  = getComputedStyle(frame).width;
const frameSizeH  = getComputedStyle(frame).height;

const dogSizeW = getComputedStyle(dog).width;
const dogSizeH = getComputedStyle(dog).height;

let dogTop;
let dogLeft;

function dogPosition() {
dogTop =  Math.round ( Math.random() * (parseInt(frameSizeH) - 10) + 10 - parseInt(dogSizeH));
dogLeft =  Math.round ( Math.random() * (parseInt(frameSizeW) - 10) + 10- parseInt(dogSizeW));

dog.style.left = dogLeft + "px";
dog.style.top = dogTop + "px";
}

//setInterval (dogPosition, 500);




console.log(dogLeft);
console.log(dogTop);





