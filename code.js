// a handle for the drawing canvas object
const feigenCanvas = document.getElementById("feigenbaum-diagram");
// a context for the drawing canvas object with properties and methods for drawing
const feigenContext = feigenCanvas.getContext("2d");

feigenContext.font = "9px Arial";

function roundDP(number, accuracy) {
    const mult = 10 ** accuracy;
    return Math.round(number * mult) / mult;
  }

// system parameters
const canvasWidth = feigenCanvas.width;
const canvasHeight = feigenCanvas.height;

//this app parameters
const funcMinX = 0;
const funcMaxX = 3.5;
const funcMinY = 0;
const funcMaxY = 1.5;

const funcRangeX = funcMaxX - funcMinX;
const funcRangeY = funcMaxY - funcMinY;

const deltaX = funcRangeX/canvasWidth;
const deltaY = funcRangeY/canvasHeight;

function canvasX(x) {
    return Math.round(x/deltaX);
}
function canvasY(y) {
    return canvasHeight - Math.round((y/deltaY));
}

function setPixel(x,y) {
    feigenContext.fillRect(canvasX(x),canvasY(y),1,1);
}

function feigen(population, feedback) {
    return population + population * feedback * (1-population);
}

for (range=deltaX;range<funcRangeX;range+=deltaX) {
    feed = range;
    numIterations = 100;
    pop = 0.3;
    for (index=1;index<numIterations;index++) {
        setPixel(feed,pop);
        pop = feigen(pop, feed);
    }
}