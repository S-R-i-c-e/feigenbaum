// a handle for the drawing canvas object
const feigenCanvas = document.getElementById("feigenbaum-diagram");
// a context for the drawing canvas object with properties and methods for drawing
const feigenContext = feigenCanvas.getContext("2d");

const toOneDP = function (number) {
    return Math.round(number*10)/10;
}

// notional coordinate space
const xPixels = 500;
const yPixels = 500;

// canvas space
const systemWidth = feigenCanvas.width;
const systemHeight = feigenCanvas.height;

// canvas pixels
const deltaX = toOneDP(systemWidth/xPixels);
const deltaY = toOneDP(systemHeight/yPixels);

// convert notional space to system space
function systemY(y) {
    return systemHeight-(y*deltaY);
}

function systemX(x) {
    return x*deltaX;
}

// set notional pixel -> canvas coordinates and set
function setPixel(x,y) {
    let canvasY = systemY(y);
    let canvasX = systemX(x);
    feigenContext.fillRect(canvasX,canvasY,deltaX,deltaY);
    return true;
}

y=100;
for (let x=100;x<=200;x++) {
    setPixel(x,y);
}
x=100;
for (let y=100;y<=200;y++) {
    setPixel(x,y);
}
x=200;
for (let y=100;y<=300;y++) {
    setPixel(x,y);
}
feigenContext.font = "16px Arial";
feigenContext.fillText(deltaX, 300, 100);
// screen constants
// const xPixels = 500;
// const yPixels = 500;

// // drawing constants
// const deltaX = toOneDP(feigenCanvas.width/xPixels);
// const deltaY = toOneDP(feigenCanvas.height/yPixels);

// // test drawing
// feigenContext.fillStyle = "#FF0000";
// // test drawing

// let y=200;
// for (let x=200; x<300; x++) {
//     drawPixel(x,y);
// }

// function drawPixel(x, y) {
//     feigenContext.fillRect(x,y,1,1);
//     return true
// }
