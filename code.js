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
const viewSurfaceWidth = feigenCanvas.width;
const viewSurfaceHeight = feigenCanvas.height;

//this app parameters
const funcMinX = 0;
const funcMaxX = 3.51;
const funcMinY = 0;
const funcMaxY = 1.5;

const funcRangeX = funcMaxX - funcMinX;
const funcRangeY = funcMaxY - funcMinY;

const deltaX = funcRangeX/viewSurfaceWidth;
const deltaY = funcRangeY/viewSurfaceHeight;

function canvasX(x) {
    return Math.round(x/deltaX);
}
function canvasY(y) {
    return viewSurfaceHeight - Math.round((y/deltaY));
}

function setPixel(x,y) {
    feigenContext.fillRect(canvasX(x),canvasY(y),1,1);
}

function feigen(population, feedback) {
    return population + population * feedback * (1-population);
}

function drawFeigen () {
    for (range=deltaX;range<funcRangeX;range+=deltaX) {
        feed = range;
        numIterations = 100;
        pop = 0.3;
        for (index=1;index<numIterations;index++) {
            setPixel(feed,pop);
            pop = feigen(pop, feed);
        }
    }
}

drawFeigen();